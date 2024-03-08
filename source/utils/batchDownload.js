import { kernelApi } from "../asyncModules.js";

export const 下载路径内所有图片 = async (id,递归下载) => {
    try {
        let doc = kernelApi.sql.sync({
            stmt: `select * from blocks where root_id = '${id}' and type ='d'`
        })[0];
        if (!doc) {
            console.error(`Document with id ${id} not found.`);
            return;
        }

        const 子文档列表 = kernelApi.listDocsByPath.sync({
            path: doc.path,
            notebook: doc.box
        });

        for (const 子文档 of 子文档列表.files) {
            try {
                kernelApi.pushMsg({
                    msg: `开始下载${子文档.name}内的图片`
                });
                kernelApi.netImg2LocalAssets.sync({id: 子文档.id});

                // 递归下载子文档内的附件
                if(递归下载){
                await 下载路径内所有图片(子文档.id);
                }
            } catch (error) {
                console.error(`Error downloading attachments from ${子文档.name}:`, error);
            }
        }
    } catch (error) {
        console.error('Error in 下载路径内所有附件:', error);
    }
};
export const 下载路径内所有附件=async(id,递归下载)=>{
    try {
        let doc = kernelApi.sql.sync({
            stmt: `select * from blocks where root_id = '${id}' and type ='d'`
        })[0];
        if (!doc) {
            console.error(`Document with id ${id} not found.`);
            return;
        }

        const 子文档列表 = kernelApi.listDocsByPath.sync({
            path: doc.path,
            notebook: doc.box
        });

        for (const 子文档 of 子文档列表.files) {
            try {
                kernelApi.pushMsg({
                    msg: `开始下载${子文档.name}内的图片`
                });
                kernelApi.netAssets2LocalAssets.sync({id: 子文档.id});

                // 递归下载子文档内的附件
                if(递归下载){
                await 下载路径内所有附件(子文档.id);
                }
            } catch (error) {
                console.error(`Error downloading attachments from ${子文档.name}:`, error);
            }
        }
    } catch (error) {
        console.error('Error in 下载路径内所有附件:', error);
    }
}