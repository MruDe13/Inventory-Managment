const checkItemName = require("./name");

function checkItemField(request){
    if(checkItemName.checkItemName(request.name)){} else {
        return "Invalid Item Name"
    }
    return true;
}

module.exports = { checkItemField }

