function checkItem(item){
    if (typeof item === 'string' && item.length > 1){
        return true
    }
    return false;
}

module.exports = { checkItem }
