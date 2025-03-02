import * as acorn from 'acorn'
import * as walk from 'acorn-walk'
import { Frameworks } from './index'

interface ILoaderMeta {
  importFrameworkStatement: string
  mockAppStatement: string
  frameworkArgs: string
  creator: string
  creatorLocation: string
  importFrameworkName: string
  isNeedRawLoader?: boolean
  extraImportForWeb?: string
  execBeforeCreateWebApp?: string
  compatComponentImport?: string
  compatComponentExtra?: string
  modifyConfig?: (config: Record<string, any>, source: string) => void
}

function addConfig (source) {
  const configsMap = {
    enableShareAppMessage: ['onShareAppMessage', 'useShareAppMessage'],
    enableShareTimeline: ['onShareTimeline', 'useShareTimeline']
  }
  const ast = acorn.parse(source, {
    ecmaVersion: 'latest',
    sourceType: 'module'
  })

  const additionConfig: Record<string, any> = {}

  function check (name: string) {
    Object.keys(configsMap).forEach(configName => {
      const apis: string[] = configsMap[configName]
      if (apis.includes(name)) {
        additionConfig[configName] = true
      }
    })
  }

  walk.simple(ast, {
    FunctionExpression (node: any) {
      if (!node.id || !node.id.name) return
      check(node.id.name)
    },
    FunctionDeclaration (node: any) {
      if (!node.id || !node.id.name) return
      check(node.id.name)
    },
    CallExpression (node: any) {
      const { callee } = node
      if (callee.type === 'Identifier') {
        check(callee.name)
      } else if (callee.type === 'MemberExpression') {
        if (callee.property.type === 'Identifier') {
          check(callee.property.name)
        } else if (callee.property.type === 'Literal') {
          check(callee.property.value)
        }
      }
    }
  })

  return additionConfig
}

const frameworkMeta: Record<string, ILoaderMeta> = {
  nerv: {
    importFrameworkStatement: `
import Nerv from 'nervjs';
`,
    mockAppStatement: `
class App extends Nerv.Component {
  render () {
    return this.props.children
  }
}
`,
    frameworkArgs: 'Nerv, Nerv, config',
    creator: 'createReactApp',
    creatorLocation: '@tarojs/plugin-framework-react/dist/runtime',
    importFrameworkName: 'Nerv',
    modifyConfig (config, source) {
      Object.assign(config, addConfig(source))
    }
  },
  react: {
    importFrameworkStatement: `
import * as React from 'react'
import ReactDOM from 'react-dom'
`,
    mockAppStatement: `
class App extends React.Component {
  render () {
    return this.props.children
  }
}
`,
    frameworkArgs: 'React, ReactDOM, config',
    creator: 'createReactApp',
    creatorLocation: '@tarojs/plugin-framework-react/dist/runtime',
    importFrameworkName: 'React',
    compatComponentImport: 'import { PullDownRefresh } from "@tarojs/components"',
    compatComponentExtra: 'config.PullDownRefresh = PullDownRefresh',
    modifyConfig (config, source) {
      Object.assign(config, addConfig(source))
    }
  }
}

export function getLoaderMeta (framework: Frameworks) {
  if (framework === 'preact') framework = 'react'
  return frameworkMeta[framework]
}
