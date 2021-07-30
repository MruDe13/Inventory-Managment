function checkItemName(name){
    if (typeof name === 'string' && name.length > 1){
        return true;
    }
    return false
}

module.exports = { checkItemName }

