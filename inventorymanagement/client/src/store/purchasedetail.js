import InventoryDetails from "../apicalls/fetchstore";
import { edits } from "./edits";

async function PurchaseDetail(){
    let purchaseList = await InventoryDetails('purchaselist');

    console.log(purchaseList);

    edits.setPurchaseList(purchaseList);

    return purchaseList;
}

export default PurchaseDetail;

