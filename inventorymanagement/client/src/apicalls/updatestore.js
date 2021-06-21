import { customerInfo } from "../store/customer";
import { VendorOrders } from "../store/vendor";
import { RawMaterial } from "../store/rawmaterial";

function updateStore(index, store, newValue){
    store[index] = newValue;
    console.log( JSON.stringify(store) );
}


export default updateStore;