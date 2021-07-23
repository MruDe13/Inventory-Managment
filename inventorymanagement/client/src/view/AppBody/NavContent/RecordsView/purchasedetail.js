import { edits } from "../../../../store/edits";
import DrawTable from "../../../../minorcomponents/tables";
import { useState, useContext } from 'react';
import onRowEdit from "../../../rowedit";
import { BodyContext } from '../../appbody';
import '../../../../App.css';

function PurchaseDetails(){
    let [purchaseList, setPurchaseList] = useState([]);
    edits["setPurchaseList"] = setPurchaseList;
    edits["purchaseList"] = purchaseList;
    let {changeDialogStatus} = useContext(BodyContext);


    function Edit(index){
        onRowEdit(index, purchaseList, changeDialogStatus)
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
