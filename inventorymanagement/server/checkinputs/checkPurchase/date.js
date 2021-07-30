function checkDate(date){
    console.log(date)
    if (typeof date === 'string' && date.length === 10 ){
        return true;
    }
    return false;
}

module.exports = { checkDate }

