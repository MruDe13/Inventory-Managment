const execPostQuery = require('../utils/execPostQuery');

async function postVendorDetail(request){
    let query = `INSERT INTO vendor (vendorName, phoneNumber, email, address, panNumber, gstNumber, ownerName, paymentDays) VALUES ("${request.vendorName}", ${Number(request.phoneNumber)}, "${request.email}", "${request.address}", "${request.panNumber}", "${request.gstNumber}", "${request.ownerName}", ${Number(request.paymentDays)}) `;

    let queryResponse = null;
    try{
        queryResponse = await execPostQuery(query);
    } catch(error){
        console.error("Inserting vendor detail failed");
        queryResponse = "Failed!"
    }
    
    return queryResponse;
}


module.exports = postVendorDetail;

