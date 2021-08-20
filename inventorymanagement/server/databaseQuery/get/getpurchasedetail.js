const execGetQuery = require('../utils/execGetQuery');

async function getPurchaseDetail(){

    let query = `SELECT * FROM purchase`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Purchase detail");
    }

    return response;
}

module.exports = getPurchaseDetail;
