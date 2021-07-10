import GetInventoryDetails from "../apicalls/fetchstore";
import { edits } from "./edits";

async function PurchaseDetail(){
    let purchaseList = await GetInventoryDetails('purchasetable');

    console.log(purchaseList);

    edits.setPurchaseList(purchaseList);

    return purchaseList;
}

export default PurchaseDetail;
