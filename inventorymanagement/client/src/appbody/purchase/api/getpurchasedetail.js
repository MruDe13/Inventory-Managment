import MakeGetAPI from "../../../apicalls/makegetapi";
let purchaseinfo = require("../store/purchaseinfo");

async function getPurchaseDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("purchasetable").then((data)=>{
            purchaseinfo = [...data];
            setDetailView([...purchaseinfo])
            res(purchaseinfo)
        })
    });

    return response 
}

export { getPurchaseDetail }
