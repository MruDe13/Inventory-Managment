function checkBillNumber(BillNumber){
    if (typeof BillNumber === 'string'){
        return true
    }
    return false
}

module.exports = { checkBillNumber }
