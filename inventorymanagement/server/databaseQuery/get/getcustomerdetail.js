const execGetQuery = require('../utils/execGetQuery');

async function getCustomerDetail(){

  let query = `SELECT id, customerName as "Customer Name", ownerName as "Owner", phoneNumber as "Contact", address as "Address", email as "E-mail", gstNumber as "GST", panNumber as "PAN", paymentDays as "Payment Duration" FROM customer;`;
  let response = null;
  
  try{
    response = await execGetQuery(query);
  } catch(err){
      console.error("Unable to fetch Customer detail");
  }

  return response;
}

module.exports = getCustomerDetail;
