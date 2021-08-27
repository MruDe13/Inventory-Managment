const execGetQuery = require('../utils/execGetQuery');

async function getPurchaseDetail(){

    let query = `SELECT purchase.id as "Purchase ID", vendor.vendorName as "Vendor", rawmaterialstock.rawMaterialName as "Raw Material", billNumber as "Bill Number", purchase.quantity as "Quantity Purchased", purchase.totalCost as "Total Cost", purchase.amountPaid as "Amount Paid", purchase.date as "Date", purchase.damagedQuantity as "Damaged Qty" FROM purchase INNER JOIN vendor ON vendor.id = purchase.vendorid AND INNER JOIN rawmaterialstock ON rawmaterialstock.id = purchase.rawmaterialid;`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Purchase detail");
    }

    return response;
}

module.exports = getPurchaseDetail;
