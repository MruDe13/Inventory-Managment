import { edits } from "../../../../store/edits";
import DrawTable from "../../../../minorcomponents/tables";
import { useState, useContext, useEffect } from 'react';
import onRowEdit from "../../../rowedit";
import { BodyContext } from '../../appbody';
import '../../../../App.css';
import { store } from "../../../../store/context";
import { PurchaseDetail as PurchaseAPI } from "../../../../store";


function PurchaseDetails(){
    let purchaseList = [...store["purchaseList"]];
    let [purchaseView, setPurchaseView] = useState([...purchaseList]);
    let {changeDialogStatus} = useContext(BodyContext);

    function updatePurchaseView(){
        setPurchaseView([...store["purchaseList"]])
    }

    edits["updatePurchaseView"] = updatePurchaseView;

    function Edit(index){
        onRowEdit(index, purchaseList, changeDialogStatus)
    }

    useEffect(()=>{
        PurchaseAPI();
    },[])

    if (purchaseView.length === 0){
        return(
            <div> PURCHASE LIST IS EMPTY </div>
        )
    }

    return(
        <div>
           <DrawTable Table={purchaseView} editable={true} onClick={Edit} />   
        </div>
    )
}

export default PurchaseDetails;
