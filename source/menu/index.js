import {plugin} from '../asyncModules.js'
import { 思源内部界面事件 } from '../utils/eventType.js'
import { 创建编辑器标题图标菜单 } from './editortitleiconClickMenu.js'
plugin.eventBus.on(
    思源内部界面事件.编辑器标题图标点击,(e)=>{
        创建编辑器标题图标菜单(e)
    }
  
)
plugin.eventBus.on(
    思源内部界面事件.文档树项目点击,(e)=>{
        创建文档树项目菜单(e)
    }
)
function 创建文档树项目菜单(e){
    console.log(e)
}