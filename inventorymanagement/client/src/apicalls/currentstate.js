import { edits } from "../store/edits";
import { customerInfo } from "../store/customer";
import { RawMaterial } from "../store/rawmaterial";

export function currentStore(){
    
    if (edits.currentState === 'CUSTOMER'){
        return customerInfo;
    }

    if (edits.currentState === 'VENDOR'){
        return edits.vendorList ;
    }

    if (edits.currentState === 'PURCHASE'){
        return edits.purchaseList;
    }
}