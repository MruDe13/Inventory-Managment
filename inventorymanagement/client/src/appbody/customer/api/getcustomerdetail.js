import MakeGetAPI from "../../../apicalls/makegetapi";
import { customerinfo } from "../store/customerinfo";

async function getCustomerDetail(){
    let response = new Promise((res,rej)=>{
        MakeGetAPI("customertable").then((data)=>{
            customerinfo = [...data];
            res(customerinfo)
        })
    });

    return response   
}

export { getCustomerDetail };
