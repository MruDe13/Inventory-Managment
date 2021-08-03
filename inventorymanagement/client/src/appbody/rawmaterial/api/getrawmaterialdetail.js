import MakeGetAPI from "../../../apicalls/makegetapi";
let rawmaterialinfo = require("../store/rawmaterialinfo");

async function getRawMaterialDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("rawmaterialtable").then((data)=>{
            rawmaterialinfo = [...data];
            setDetailView([...rawmaterialinfo])
            res(data)
            })
    })

    return response 
}

export { getRawMaterialDetail }

