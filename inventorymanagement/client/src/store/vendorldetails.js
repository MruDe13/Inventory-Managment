import GetInventoryDetails from "../apicalls/fetchstore";
import {edits} from './edits';

async function VendorDetails(){
    let vendorList = await GetInventoryDetails('vendortable');

    edits.setVendorList(vendorList);

    return vendorList;
}

export default VendorDetails;
