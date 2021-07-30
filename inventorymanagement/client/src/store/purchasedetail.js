import GetInventoryDetails from "../apicalls/makegetapi";
import { store } from "./context";
import { edits } from "./edits";

async function PurchaseDetail(){
    let purchaseList = await GetInventoryDetails('purchasetable');
    store["purchaseList"] = [...purchaseList];  

    edits.updatePurchaseView();

    return purchaseList;
}

export default PurchaseDetail;
