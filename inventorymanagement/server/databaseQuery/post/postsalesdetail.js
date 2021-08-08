const DB = require('../../dbConnection');
const GetFromTable = require('../help/getfromtable');

async function postSalesDetail(request){
    let db = DB.getDbConnection();
    let customerid = await GetFromTable(db, "id", "customer", "customerName", request.customerName );
    let productid = await GetFromTable(db, "id", "product", "productName", request.productName );
    let query = ``;

    let response = new Promise((res,rej)=>{
        

        if(customerid === undefined){
            return rej("Invalid Customer!")
        }

        if( productid === undefined){
            return rej("Invalid Product!")
        }

        db.exec(query, (err)=>{
            if (err){
                return rej("Failed")
            }
            res("Successful!")
        })
    })

    return response;
}


module.exports = postSalesDetail;

