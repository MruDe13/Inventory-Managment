function checkTextOnly(item){
    var letters = /^[A-Za-z]+$/;

    if (item.match(letters)){
        return true
    }
    return false
}