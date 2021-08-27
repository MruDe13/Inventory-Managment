const execGetQuery = require('../utils/execGetQuery');

async function getRawMaterialDetail(){

    let query = `SELECT id, rawMaterialName as "Material Name", type as "Type of Material", remarks, quantity, minimumQuantity as "Minimum Required Qty" FROM rawmaterialstock;`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch RawMaterial detail");
    }

    return response;
}

module.exports = getRawMaterialDetail;

