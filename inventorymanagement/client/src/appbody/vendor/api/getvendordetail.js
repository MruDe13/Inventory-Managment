import MakeGetAPI from "../../../apicalls/makegetapi";
let vendorinfo = require("../store/vendorinfo");

async function getVendorDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("vendortable").then((data)=>{
            vendorinfo = [...data];
            setDetailView([...vendorinfo])
            res(vendorinfo)
        })
    });

    return response 
}

export { getVendorDetail }
