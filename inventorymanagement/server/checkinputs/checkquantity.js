function checkQuantityField(quantity){
    console.log(quantity);
    if (Number(quantity)=== NaN){
        return false
    }
    
    return true;
}

module.exports = { checkQuantityField }

