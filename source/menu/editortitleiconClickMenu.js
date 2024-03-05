import {kernelApi, plugin} from '../asyncModules.js'
export const 创建编辑器标题图标菜单=(e)=>{
    const {data,menu}=e.detail
    menu.addItem(
        {
            label:'下载子文档所有图片',
            icon:"iconDownload",
            click:()=>{
                console.log(data.rootID)
                let doc =kernelApi.sql.sync(
                    {
                        stmt:`select * from blocks where root_id = '${data.rootID}' and type ='d'`
                    }
                )[0]
                const 子文档列表 = kernelApi.listDocsByPath.sync(
                    {
                        path:doc.path,
                        notebook:doc.box
                        
                    }
                )
                子文档列表.files.forEach(子文档 => {
                    kernelApi.netImg2LocalAssets.sync({id:子文档.id})
                });
            }
        },
    )
    menu.addItem(
        {
            label:'下载子文档所有文件',
            icon:"iconDownload",
            click:()=>{
                console.log(data.rootID)
                let doc =kernelApi.sql.sync(
                    {
                        stmt:`select * from blocks where root_id = '${data.rootID}' and type ='d'`
                    }
                )[0]
                const 子文档列表 = kernelApi.listDocsByPath.sync(
                    {
                        path:doc.path,
                        notebook:doc.box
                        
                    }
                )
                子文档列表.files.forEach(子文档 => {
                    kernelApi.netAssets2LocalAssets.sync({id:子文档.id})
                });
            }
        }
    )
}