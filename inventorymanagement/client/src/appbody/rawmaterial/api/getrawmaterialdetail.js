import MakeGetAPI from "../../../apicalls/makegetapi";
import { rawmaterialinfo } from "../store/rawmaterialinfo";

async function getRawMaterialDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("rawmaterialtable").then((data)=>{
            rawmaterialinfo = [...data];
            res(rawmaterialinfo)
        })
    });

    return response 
}

export { getRawMaterialDetail }

