function checkQuantity(quantity){
    if (Number(quantity) !== NaN && quantity > 0){
        return true
    }
    return false
}

module.exports = { checkQuantity }
