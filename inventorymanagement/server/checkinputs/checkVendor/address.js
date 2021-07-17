function checkAddress(address){
    if (address !== null && typeof address === 'string'){
        return true;
    }
    return false;
}

module.exports = { checkAddress };
