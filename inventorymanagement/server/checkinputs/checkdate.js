function checkDate(date){
    console.log(date)
    if (date === ''){
        return false;
    }

    if (date.length < 10){
        return false;
    }

    return true;
}

module.exports = { checkDate }

