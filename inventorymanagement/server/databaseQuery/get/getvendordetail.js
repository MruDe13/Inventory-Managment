const execGetQuery = require('../utils/execGetQuery');

async function getVendorDetail(){

    let query = `SELECT * FROM vendor`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Vendor detail");
    }

    return response;
}

module.exports =  getVendorDetail;

