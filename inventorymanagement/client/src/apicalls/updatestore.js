import { currentStore } from "./currentstate";
import { edits } from "../store/edits";
import PostInventoryDetails from "./postapi";

function updateStore(index, newValue){

    if (edits.currentState === 'PURCHASE'){
        PostInventoryDetails('updatepurchase', newValue)
    }

    let store = currentStore();
    store[index] = newValue;
    console.log( JSON.stringify(store) );
}


export default updateStore;
