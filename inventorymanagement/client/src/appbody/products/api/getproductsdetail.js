import MakeGetAPI from "../../../apicalls/makegetapi";
let productsinfo = require("../store/productsinfo");

async function getProductsDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("producttable").then((data)=>{
            productsinfo = [...data];
            setDetailView([...productsinfo])
            res(productsinfo)
        })
    });

    return response 
}

export { getProductsDetail }
