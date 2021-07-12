import { edits } from "../store/edits";
import '../App.css'
import DrawTable from "../minorcomponents/tables";
import { useState } from 'react';

function PurchaseDetails(props){
    let [purchaseList, setPurchaseList] = useState([]);
    edits["setPurchaseList"] = setPurchaseList;
    edits["purchaseList"] = purchaseList;

    function onRowEdit(index){
        console.log("onPurchaseEdit at index " + index);
        const editData = {...purchaseList[index]};

        function onSave(){
            purchaseList[index] = editData;
            console.log("onSave")
        }
        function onCancel(){
            console.log("Fuck off!");
        }

        props.changeDialogStatus({
            editData:editData,
            onSave: onSave,
            onCancel: onCancel
        });
    }

    if (purchaseList.length === 0){
        return(
            <div> PURCHASE LIST IS EMPTY </div>
        )
    }

    return(
        <div>
           <DrawTable Table={purchaseList} editable={true} onClick={onRowEdit} />
           
        </div>
    )
}

export default PurchaseDetails;
