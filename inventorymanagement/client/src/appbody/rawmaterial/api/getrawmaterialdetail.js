import MakeGetAPI from "../../../apicalls/makegetapi";
import { rawmaterialinfo } from "../store/rawmaterialinfo";

async function getRawMaterialDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("rawmaterialtable").then((data)=>{
            res(data)
        })
    });

    return response 
}

export { getRawMaterialDetail }

