function checkItemField(item){
    if (item.length < 1){
        return false;
    }
    if (item === null){
        return false;
    }

    return true;
}

module.exports = { checkItemField };

