function checkBillAmount(billAmount){

    if (Number(billAmount) !== NaN && billAmount > 0){
        return true
    }
    return false
}

module.exports = { checkBillAmount };

