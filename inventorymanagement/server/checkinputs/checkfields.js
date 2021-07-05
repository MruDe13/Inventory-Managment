const checkNameField = require ('./checkname');
const checkItemField = require ('./checkitem');
const checkQuantityField = require ('./checkquantity');
const checkBillAmount = require ('./checkbillamount');
const checkPaidAmount = require ('./checkpaidamount');
const checkDate = require ('./checkdate');

function checkFields(request){

    console.log('CheckField called.')

     //Name Check
    if (checkNameField.checkNameField(request['Vendor Name'])){

    } else {
        return ('Invalid Vendor Name!');
    }

    //Item Check
    if (checkItemField.checkItemField(request['Item Name'])){
        
    } else {
        return ('Invalid Item Name!');
    }

    //Quantity Check
    if (checkQuantityField.checkQuantityField(request.Quantity)){

    } else {
        return ('Enter a Valid Quantity!')
    }

    //Bill Amount Check
    if (checkBillAmount.checkBillAmount(request['Bill Amount'])){

    } else {
        return ('Enter valid Bill Amount')
    }

    //Check Paid Amount
    if (checkPaidAmount.checkPaidAmount(request['Paid Amount'])){

    } else {
        return ('Enter valid Paid Amount!')
    }

    // Check Date
    if (checkDate.checkDate(request.Date)){

    } else {
        return ('Enter a Valid Date.')
    }
    
    if (request['Bill Number'] === null ||request['Bill Number'] === 'null'|| request['Bill Number'] === ''){
        request['Bill Number'] = "N/A";
    }
    if (request['Delivery Status'] === null || request['Delivery Status'] === 'null' || request['Delivery Status'] === ''){
        request['Delivery Status'] = "Not Delivered";
    }
    if (request.delivery_quantity === null){
    request.delivery_quantity = 0;
    }

    console.log(request);
    return true;
}

module.exports = { checkFields };

