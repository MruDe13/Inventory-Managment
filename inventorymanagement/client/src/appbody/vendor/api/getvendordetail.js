import MakeGetAPI from "../../../apicalls/makegetapi";
import { vendorinfo } from "../store/vendorinfo";

async function getVendorDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("vendortable").then((data)=>{
            vendorinfo = [...data];
            res(vendorinfo)
        })
    });

    return response 
}

export { getVendorDetail }
