const DB = require('../dbConnection');

async function updatePurchase(request){
    let db = DB.getDbConnection();
    let response = new Promise((res,rej)=>{
            let query1 = `Select id from Vendor_Details where name="${request['Vendor Name']}"`;
            db.get( query1, (err, vendor_id )=>{
                if (err){
                    return rej("Vendor not registered.")
                  }

                request['Vendor Name'] = vendor_id;
                let query2 = `Select id from Item where name="${request['Item Name']}"`;
                db.get( query2, (err, item_id )=>{
                    if (err){
                    return rej("Item not registered.")
                    }

                    request['Item Name'] = item_id;
                    let query3 = `UPDATE Purchase_Book SET vendor_id = ${request['Vendor Name'].id}, item_id = ${request['Item Name'].id}, quantity = ${Number(request.Quantity)}, bill_amount = ${Number(request['Bill Amount'])}, paid_amount = ${Number(request['Paid Amount'])}, date = "${request.Date}", bill_number = "${request['Bill Number']}", delivery_status = "${request['Delivery Status']}" WHERE id= ${request.id};`
            
                    db.run(query3,(err)=>{
                        if (err){
                            return rej("Couldn't update. Please contact your service provider.")
                        }
                        res("Successfully updated!")
                    });
                });
            });
        });
    return response;
}

module.exports = { updatePurchase }
