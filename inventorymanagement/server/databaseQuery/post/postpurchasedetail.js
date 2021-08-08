const DB = require('../../dbConnection');
const GetFromTable = require('../help/getfromtable');


async function postPurchaseDetail(request){
    let db = DB.getDbConnection();
    let vendorid = await GetFromTable(db, "id", "vendor", "vendorName", request.vendorName);
    let rawmaterialid = await GetFromTable(db, "id", "rawmaterialstock", "rawMaterialName", request.rawMaterialName);
    let oldquantity = await GetFromTable(db, "quantity", "rawmaterialstock", "id", rawmaterialid);
    let newquantity = Number(oldquantity) + Number(request.quantity);
    let query = `INSERT INTO purchase (vendorid, rawmaterialid, billNumber, quantity, totalCost, amountPaid, damagedQuantity, date) VALUES (${vendorid}, ${rawmaterialid}, "${request.billNumber}", ${Number(request.quantity)}, ${Number(request.totalCost)}, ${Number(request.amountPaid)}, ${Number(request.damagedQuantity)}, "${request.date}");`;

    let response = new Promise((res,rej)=>{
        
        console.log(query)

        if (vendorid === undefined){
            return rej("Invalid Vendor Name!")
        }
        if (rawmaterialid === undefined){
            return rej("Invalid Raw Material!")
        }

        db.exec(query, (err)=>{
            if(err){
                return rej("Couldn't save. Please try again!")
            }
            res("Successful!");

            let query1 = `Update rawmaterialstock SET quantity = ${newquantity} WHERE id=${rawmaterialid}`

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


module.exports = postPurchaseDetail;

