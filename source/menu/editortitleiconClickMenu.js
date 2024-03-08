import {kernelApi, plugin} from '../asyncModules.js'
import { 下载路径内所有图片 ,下载路径内所有附件} from '../utils/batchDownload.js'
export const 创建编辑器标题图标菜单=(e)=>{
    const {data,menu}=e.detail
    menu.addItem(
        {
            label:'子文档内容批量下载',
            icon:"iconDownload",
            submenu:[
                {
                    label:'下载子文档所有图片',
                    icon:"iconDownload",
                    click:async ()=>{
                      await 下载路径内所有图片(data.rootID)
                    }
                },     {
                    label:'递归下载子文档所有图片',
                    icon:"iconDownload",
                    click:async ()=>{
                      await 下载路径内所有图片(data.rootID,true)
                    }
                },        {
                    label:'下载子文档所有文件',
                    icon:"iconDownload",
                    click:async()=>{
                        await 下载路径内所有附件(data.rootID)
                    }
                }, {
                    label:'递归下载子文档所有文件',
                    icon:"iconDownload",
                    click:async()=>{
                        await 下载路径内所有附件(data.rootID,true)
                    }
                }
            ]

        }
    )
}