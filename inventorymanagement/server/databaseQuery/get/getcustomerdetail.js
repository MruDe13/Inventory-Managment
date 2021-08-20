const execGetQuery = require('../utils/execGetQuery');

async function getCustomerDetail(){

  let query = `SELECT * FROM customer`;
  let response = null;
  
  try{
    response = await execGetQuery(query);
  } catch(err){
      console.error("Unable to fetch Customer detail");
  }

  return response;
}

module.exports = getCustomerDetail;
