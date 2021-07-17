const DB = require('../dbConnection');

async function getVendorDetail(){
    let db = DB.getDbConnection();
    let data =[];
    let query = `SELECT id as "ID", name as "Name", owner_name as "Owner", address as "Address", phone_number as "Contact" from Vendor_Details;`;
    let response = new Promise((res, rej)=>{
        db.serialize(() => {
            db.each(query, (err, details) => {
              if (err) {
                console.error(err);
                rej(JSON.stringify(err))
              }
              console.log(details);
              data.push(details);  
            }, ()=>{
              res(data)
            });
        });
    })

    return response;
}

module.exports = { getVendorDetail }