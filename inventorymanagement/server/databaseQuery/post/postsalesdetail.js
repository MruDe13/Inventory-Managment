const DB = require('../../dbConnection');
const GetFromTable = require('../help/getfromtable');

async function postSalesDetail(request){
    let db = DB.getDbConnection();
    let customerid = await GetFromTable(db, "id", "customer", "customerName", request.customerName );
    let productid = await GetFromTable(db, "id", "product", "productName", request.productName );
    let oldquantity = await GetFromTable(db, "quantity", "product", "id", productid);
    let newquantity = Number(oldquantity) - Number(request.quantity);
    let query = `INSERT INTO sales (customerid, productid, date, quantity, billAmount, discountPercent, discountAmount, totalAmount, amountReceived, billNumber) VALUES (${customerid}, ${productid}, "${request.date}", ${Number(request.quantity)}, ${Number(request.billAmount)}, ${Number(request.discountPercent)}, ${Number(request.discountAmount)}, ${Number(request.totalAmount)}, ${Number(request.amountReceived)}, "${request.billNumber}" )`;

    let response = new Promise((res,rej)=>{

        if(customerid === undefined){
            return rej("Invalid Customer!")
        }

        if( productid === undefined){
            return rej("Invalid Product!")
        }

        if(newquantity < 0){
            return rej("Insufficient Stock. Cannot complete the transaction!")
        }

        db.exec(query, (err)=>{
            if (err){
                return rej("Failed")
            }
            res("Successful!");

            let query1 = `Update product SET quantity = ${newquantity} WHERE id=${productid}`

            db.exec(query1, (err)=>{
                if(err){
                    return console.log("Couldn't update stockbook");
                }
                console.log("Stock book updated!")
            })
        })
    })

    return response;
}


module.exports = postSalesDetail;

