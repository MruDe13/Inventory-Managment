const DB = require('../dbConnection');

async function getPurchasetDetail(){
    let db = DB.getDbConnection();
    let data = [];
    let response = new Promise((res, rej)=>{
        db.serialize(() => {
            db.each(`select Purchase_Book.id, Vendor_Details.name as "Vendor Name", Item.name as "Item Name",quantity as "Quantity", bill_amount as "Bill Amount", paid_amount as "Paid Amount", date as "Date", bill_number as "Bill Number", delivery_status as "Delivery Status" from Purchase_Book inner join Vendor_Details on Vendor_Details.id = Purchase_Book.vendor_id inner join Item on Item.id = Purchase_Book.item_id;`, (err, details) => {
              if (err) {
                console.error(err.message);
                return rej("Database Query Failed!")

              }
              data.push(details);  
            },()=>{
                res(data);
            });
        });
    })
    return response;
}

module.exports = {getPurchasetDetail}

