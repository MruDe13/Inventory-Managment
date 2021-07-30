function checkOwnerName(ownername){
    if (typeof ownername === 'string' && ownername.length > 1){
        return true
    }
    return false;
}

module.exports = { checkOwnerName };

