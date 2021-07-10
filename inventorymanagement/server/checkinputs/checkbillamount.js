function checkBillAmount(billAmount){
    // console.log(billAmount)
    if (Number(billAmount) ===  NaN){
        return false;
    }
    if (billAmount === ''){
        return false;
    }
    if (billAmount === undefined){
        return false;
    }
    return true;
}

module.exports = { checkBillAmount };

