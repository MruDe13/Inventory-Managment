const execGetQuery = require('../utils/execGetQuery');

async function getSalesDetail(){

    let query = `SELECT sales.id as "Sales ID", customer.customerName as "Customer", product.productName as "Product", sales.date as "Transaction Date", sales.billNumber as "Bill Number", sales.quantity as "Qty Sold", sales.billAmount as "Bill Amount", sales.discountPercent as "Discount %", sales.discountAmount as "Discount Amount", sales.totalAmount as "Total", sales.amountReceived as "Amount Received" FROM sales INNER JOIN customer ON (customer.id = sales.customerid) INNER JOIN product ON (product.id = sales.productid);`;
    let response = null;
    try{
        response = await execGetQuery(query);
    } catch(err){
        console.error("Unable to fetch Sales detail");
    }

    return response;
}

module.exports = getSalesDetail;

