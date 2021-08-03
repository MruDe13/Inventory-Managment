import MakeGetAPI from "../../../apicalls/makegetapi";
let customerinfo = require("../store/customerinfo");

async function getCustomerDetail(setDetailView){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("customertable").then((data)=>{
            customerinfo = [...data];
            setDetailView([...customerinfo])
            res(customerinfo)
        })
    });

    return response   
}

export { getCustomerDetail };
