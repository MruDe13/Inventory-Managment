import { edits } from "../store/edits";

export function currentStore(){

    if (edits.currentState === null){
        return <div></div>;
    }
    
    if (edits.currentState === 'STOCK'){
        return edits.stockList;
    }

    if (edits.currentState === 'VENDOR'){
        return edits.vendorList ;
    }

    if (edits.currentState === 'PURCHASE'){
        return edits.purchaseList;
    }
}

