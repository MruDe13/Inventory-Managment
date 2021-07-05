import InventoryDetails from "./fetchstore";

async function getVendorAndItemList(){
    let VendorList = await InventoryDetails('vendorlist');
    let ItemList = await InventoryDetails('itemlist');

    return {VendorList,ItemList};
}


// 

