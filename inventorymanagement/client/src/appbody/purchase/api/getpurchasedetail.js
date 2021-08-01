import MakeGetAPI from "../../../apicalls/makegetapi";
import { purchaseinfo } from "../store/purchaseinfo";

async function getPurchaseDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("purchasetable").then((data)=>{
            purchaseinfo = [...data];
            res(purchaseinfo)
        })
    });

    return response 
}

export { getPurchaseDetail }
