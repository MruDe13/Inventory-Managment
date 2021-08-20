const execGetQuery = require('../utils/execGetQuery');

async function getSalesDetail(){

    let query = `SELECT * FROM sales`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Sales detail");
    }

    return response;
}

module.exports = getSalesDetail;

