function checkPaidAmount(PaidAmount){
    if (Number(PaidAmount) === NaN){
        return false;
    }

    if (PaidAmount === ''){
        PaidAmount = 0;
    }

    return true;
}

module.exports = { checkPaidAmount }
