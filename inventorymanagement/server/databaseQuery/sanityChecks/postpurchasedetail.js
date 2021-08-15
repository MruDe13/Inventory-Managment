const DB = require('../dbConnection');
const deleteLastPurchase = require('./deletelastpurchase');

async function postPurchasetDetail(request){
    let db = DB.getDbConnection();
    let query = `Select id from Vendor_Details where name="${request.name}"`;
    let response = new Promise((res, rej)=>{
        db.get(query,(err, vendor_id )=>{
            if (err || vendor_id === undefined){
                return rej("Vendor not registered.")
            }
            request.name = vendor_id;
            let query2 = `Select id from Item where name="${request.item}"`;
            db.get(query2,(err, item_id )=>{
                if (err || item_id === undefined){
                    return rej("Item not registered.")
                }

                request.item = item_id;    
                let query3 = `Insert into Purchase_Book (vendor_id, item_id, quantity, bill_amount, paid_amount, date, bill_number, delivery_status, delivery_quantity) values (${request.name.id},${request.item.id},${Number(request.quantity)},${Number(request.bill_amount)}, ${Number(request.paid_amount)},"${request.date}", "${request.bill_number}", "${request.delivery_status}", ${Number(request.delivery_quantity)});`
                db.exec(query3,(err)=>{
                    if (err){
                        return rej(JSON.stringify(err))
                    }
                    let query4 = `SELECT id, total_purchased, available FROM Raw_Material_StockBook WHERE item_id=${request.item.id}`; 

                    db.get(query4, (err, itemdetails)=>{
                        if(err || itemdetails ===undefined){
                            deleteLastPurchase.deleteLastPurchase(db)
                            return rej("Item not found.")
                        }
                        console.log(itemdetails)

                        let updatedTotal = Number(request.quantity) + Number(itemdetails.total_purchased);
                        let updatedAvailable = Number(request.quantity) + Number(itemdetails.available);
                        let query5 = `UPDATE Raw_Material_StockBook SET total_purchased= ${updatedTotal}, available=${updatedAvailable} WHERE id=${itemdetails.id}`;

                        db.exec(query5, (err)=>{
                            if (err){
                                return rej("Couldn't update Stockbook!");
                            }
                            res("Successfully Saved!")
                        })
                    })
                    
                });
            });
        });
    })
    return response;
    
}

module.exports = { postPurchasetDetail }
