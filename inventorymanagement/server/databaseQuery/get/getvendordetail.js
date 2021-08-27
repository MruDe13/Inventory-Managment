const execGetQuery = require('../utils/execGetQuery');

async function getVendorDetail(){

    let query = `SELECT id, vendorName as "Vendor Name", ownerName as "Owner", phoneNumber as "Contact", address as "Address", email as "E-mail", gstNumber as "GST", panNumber as "PAN", paymentDays as "Payment Duration" FROM vendor;`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Vendor detail");
    }

    return response;
}

module.exports =  getVendorDetail;

