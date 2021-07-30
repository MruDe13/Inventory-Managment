function checkPhoneNumber(phonenumber){
    if (Number(phonenumber) !== NaN){
        return true;
    }
    return false;
}

module.exports = { checkPhoneNumber }

