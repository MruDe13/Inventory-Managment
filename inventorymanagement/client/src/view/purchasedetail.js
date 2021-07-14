import { edits } from "../store/edits";
import '../App.css';
import DrawTable from "../minorcomponents/tables";
import { useState } from 'react';
import onRowEdit from "./rowedit";

function PurchaseDetails(props){
    let [purchaseList, setPurchaseList] = useState([]);
    edits["setPurchaseList"] = setPurchaseList;
    edits["purchaseList"] = purchaseList;

    function Edit(index){
        onRowEdit(index, purchaseList, props.changeDialogStatus)
    }

    if (purchaseList.length === 0){
        return(
            <div> PURCHASE LIST IS EMPTY </div>
        )
    }

    return(
        <div>
           <DrawTable Table={purchaseList} editable={true} onClick={Edit} />   
        </div>
    )
}

export default PurchaseDetails;
