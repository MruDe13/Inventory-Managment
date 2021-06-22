import { currentStore } from "./currentstate";

function updateStore(index, newValue){

    let store = currentStore();
    store[index] = newValue;
    console.log( JSON.stringify(store) );
}


export default updateStore;
