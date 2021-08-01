import MakeGetAPI from "../../../apicalls/makegetapi";
import { productsinfo } from "../store/productsinfo";

async function getProductsDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("productstable").then((data)=>{
            productsinfo = [...data];
            res(productsinfo)
        })
    });

    return response 
}

export { getProductsDetail }
