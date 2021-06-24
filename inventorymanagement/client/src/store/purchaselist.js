import InventoryDetails from "../apicalls/fetchstore";
import {edits} from './edits';

async function PurchaseBook(){
    let purchaseList = await InventoryDetails('vendor');

    console.log(purchaseList);

    edits.setPurchaseList(purchaseList);

    return purchaseList;
}

// PurchaseBook();

export default PurchaseBook;
