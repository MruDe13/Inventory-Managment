function checkDeliveredQuantity(quantity){
    if (Number(quantity) !== NaN){
        return true
    }
    return false
}

module.exports = { checkDeliveredQuantity };
