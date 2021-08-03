import MakeGetAPI from "../../../apicalls/makegetapi";
let salesinfo = require("../store/salesinfo");

async function getSalesDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("salestable").then((data)=>{
            salesinfo = [...data];
            setDetailView([...salesinfo])
            res(salesinfo)
        })
    });

    return response 
}

export { getSalesDetail }
