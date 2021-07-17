const checkAddress = require("./address");
const checkName = require("./name");
const checkOwnerName = require("./ownername");
const checkPhoneNumber = require("./phonenumber");

function checkVendorField(request){
    if (checkName.checkName(request.name)){} else {
        return "Invalid Vendor Name!"
    }
    if (checkOwnerName.checkOwnerName(request.owner_name)){} else {
        return "Invalid Owner name!"
    }
    if(checkAddress.checkAddress(request.address)){} else {
        return "Invalid Address!"
    }
    if (checkPhoneNumber.checkPhoneNumber(request.phone_number)){} else {
        return "Invalid Phone number!"
    }
    return true;
}

module.exports = { checkVendorField }

