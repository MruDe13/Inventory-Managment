import { edits } from "../store/edits";
import '../App.css'
import DrawTable from "../minorcomponents/tables";
import { useState } from 'react';

function PurchaseDetails(props){
    let [purchaseList, setPurchaseList] = useState([]);
    edits["setPurchaseList"] = setPurchaseList;
    edits["purchaseList"] = purchaseList;
    console.log(typeof purchaseList);
    if (purchaseList.length === 0){
        return(
            <div> PURCHASE LIST IS EMPTY </div>
        )
    }

    return(
        <div>
           <DrawTable Table={purchaseList} editable={true} changeDialogStatus={props.changeDialogStatus} />
           
        </div>
    )
}

export default PurchaseDetails;
