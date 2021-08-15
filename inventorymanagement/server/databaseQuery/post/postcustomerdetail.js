const execPostQuery = require('../utils/execPostQuery');

async function postCustomerDetail(request){
    
    let query = `INSERT INTO customer (customerName, phoneNumber, email, address, panNumber, gstNumber, ownerName, paymentDays) VALUES ("${request.customerName}", ${Number(request.phoneNumber)}, "${request.email}", "${request.address}", "${request.panNumber}", "${request.gstNumber}", "${request.ownerName}", ${Number(request.paymentDays)}) `;
    let queryResponse = null;
    
    try{
        queryResponse = await execPostQuery(query);
    } catch(error){
        console.error("Inserting customer detail failed", error);
    }
    
    return queryResponse;
}


module.exports = postCustomerDetail;

