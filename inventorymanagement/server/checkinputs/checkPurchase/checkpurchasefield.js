const checkName = require('./name');
const checkQuantity = require('./quantity');
const checkItem = require('./item');
const checkDate = require('./date');
const checkBillAmount = require('./billamount');
const checkPaidAmount = require('./paidamount');
const checkBillNumber = require('./billnumber');
const checkDeliveredQuantity = require('./deliveredquantity');


function checkPurchaseField(request){
    if (checkName.checkName(request.name)){} else {
        return "Invalid Vendor Name!"
    }
    if (checkQuantity.checkQuantity(request.quantity)){} else {
        return "Invalid Quantity. Quantity must be more than 0 and should be a number."
    }
    if(checkItem.checkItem(request.item)){} else {
        return "Invalid Item!"
    }
    if (checkDate.checkDate(request.date)){} else {
        return "Invalid Date!"
    }
    if (checkBillAmount.checkBillAmount(request.bill_amount)){} else {
        return "Invalid Bill Amount!"
    }
    if (checkPaidAmount.checkPaidAmount(request.paid_amount)){} else {
        return "Invalid Paid Amount!"
    }
    if (checkBillNumber.checkBillNumber(request.bill_number)){} else {
        return "Invalid Bill Number!"
    }
    if (checkDeliveredQuantity.checkDeliveredQuantity(request.delivery_quantity)){} else {
        return "Delivered Quantity must be a number!"
    }
    return true;
}

module.exports = { checkPurchaseField }