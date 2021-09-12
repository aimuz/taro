import { IPluginContext } from '@tarojs/service'
import * as path from 'path'

export type ProjectType = 'miniProgram' | 'miniGame' | 'miniProgramPlugin' | 'miniGamePlugin';

/** 微信小程序配置 */
export interface WeappConfig {
  /** 小程序/小游戏项目的 appid */
  appid: string,
  /** 私钥，在获取项目属性和上传时用于鉴权使用(必填) */
  privateKeyPath: string,
  /** 微信开发者工具安装路径 */
  devToolsInstallPath?: string;
  /** 上传的小程序的路径（默认 outputPath ） */
  projectPath?: string,
  /** 类型，默认miniProgram 小程序 */
  type?: ProjectType
  /** 上传需要排除的目录 */
  ignores?: Array<string>
}

/** 头条小程序配置 */
export interface TTConfig {
  email: string;
  password: string;
}

export interface IOptions {
  /** 发布版本号，默认取 package.json 文件的 taroConfig.version 字段 */
  version: string
  /** 版本发布描述， 默认取 package.json 文件的 taroConfig.desc 字段 */
  desc: string;
  /** 微信小程序CI配置 */
  weapp?: WeappConfig,
  /** 头条小程序配置 */
  tt?: TTConfig
}

export default abstract class BaseCI {
  /** taro 插件上下文 */
  protected ctx: IPluginContext;

  /** 传入的插件选项 */
  protected pluginOpts: IOptions;

  /** 当前要发布的版本号 */
  protected version: string;

  /** 当前发布内容的描述 */
  protected desc: string;

  constructor (ctx: IPluginContext, pluginOpts: IOptions) {
    this.ctx = ctx
    this.pluginOpts = pluginOpts

    const { appPath } = ctx.paths
    const { fs } = ctx.helper
    const packageInfo = JSON.parse(
      fs.readFileSync(path.join(appPath, 'package.json'), {
        encoding: 'utf8'
      })
    )
    this.version = pluginOpts.version || packageInfo.taroConfig?.version || '1.0.0'
    this.desc = pluginOpts.desc || packageInfo.taroConfig?.desc || `CI构建自动构建于${new Date().toLocaleTimeString()}`

    this._init()
  }

  /** 初始化函数，会被构造函数调用 */
  protected abstract _init():void;

  /** 打开小程序项目 */
  abstract open();

  /** 上传小程序 */
  abstract upload();

  /** 预览小程序 */
  abstract preview();
}
