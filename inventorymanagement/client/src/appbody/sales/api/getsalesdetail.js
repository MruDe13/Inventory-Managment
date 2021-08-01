import MakeGetAPI from "../../../apicalls/makegetapi";
import { salesinfo } from "../store/salesinfo";

async function getSalesDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("salestable").then((data)=>{
            salesinfo = [...data];
            res(salesinfo)
        })
    });

    return response 
}

export { getSalesDetail }
