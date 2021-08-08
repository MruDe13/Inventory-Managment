const DB = require('../../dbConnection');
const GetFromTable = require('../help/getfromtable');


async function postProductionDetail(request){
    let db = DB.getDbConnection();
    let productid = await GetFromTable(db, "id", "product", "productName", request.productName);
    let oldquantity = await GetFromTable(db, "quantity", "product", "id", productid);
    let newquantity = Number(oldquantity) + Number(request.quantity);
    let query = `INSERT INTO producttransaction (productid, date, quantity, remarks) VALUES (${productid}, "${request.date}", ${Number(request.quantity)}, "${request.remarks}")`;

    let response = new Promise((res,rej)=>{
        if(productid === undefined){
            return rej("Invalid Product!")
        }

        db.exec(query, (err)=>{
            if(err){
                return rej("Failed to make production entry!")
            }
            res("Successful");

            let query1 =`UPDATE product SET quantity = ${newquantity} WHERE id=${productid}`

            db.exec(query1, (err)=>{
                if(err){
                    return console.log("Couldn't update Product Stock");
                }
                console.log("Product stock updated!")
            })
        })
    })

    return response;
}


module.exports = postProductionDetail;

