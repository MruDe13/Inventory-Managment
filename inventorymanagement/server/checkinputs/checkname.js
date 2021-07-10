function checkNameField(name){
    if (name.length < 1){
        return false
    }
    if (name === null){
        return false
    }
    
    return true;
}


module.exports = {checkNameField};

