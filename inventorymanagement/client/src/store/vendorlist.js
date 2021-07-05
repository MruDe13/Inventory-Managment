import InventoryDetails from "../apicalls/fetchstore";
import {edits} from './edits';

async function VendorList(){
    let vendorList = await InventoryDetails('vendorlist');

    console.log(vendorList);

    edits.setVendorList(vendorList);

    return vendorList;
}

export default VendorList;
