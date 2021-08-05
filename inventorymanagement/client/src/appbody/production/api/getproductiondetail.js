import MakeGetAPI from "../../../apicalls/makegetapi";
let productioninfo = require("../store/productioninfo");

async function getProductionDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("productiontable").then((data)=>{
            productioninfo = [...data];
            setDetailView([...productioninfo])
            res(productioninfo)
        })
    });

    return response   
}

export { getProductionDetail };
