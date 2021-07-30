function checkPaidAmount(PaidAmount){
    if (Number(PaidAmount) !== NaN){
        return true;
    }
    return false;
}
module.exports = { checkPaidAmount }
