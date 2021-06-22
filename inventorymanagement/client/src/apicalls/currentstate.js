import { edits } from "../store/edits";
import { customerInfo } from "../store/customer";
import { VendorOrders } from "../store/vendor";
import { RawMaterial } from "../store/rawmaterial";

export function currentStore(){
    
    if (edits.currentState === 'CUSTOMER'){
        return customerInfo;
    }

    if (edits.currentState === 'VENDOR'){
        return VendorOrders;
    }

    if (edits.currentState === 'STOCK'){
        return RawMaterial;
    }
}