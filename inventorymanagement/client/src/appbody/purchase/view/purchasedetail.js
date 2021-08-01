import { useState, useEffect } from "react";
import { purchaseinfo } from "../store/purchaseinfo";
import { getPurchaseDetail } from "../api/getpurchasedetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function PurchaseDetail(){
    let [ detailView, setDetailView] = useState([...purchaseinfo]);

    useEffect(()=>{
        getPurchaseDetail().then(()=>{
            setDetailView([...purchaseinfo])
        })
    },[])

    if(detailView.length === 0){
        return(
            <div className="mainView">
                There are no entries.
            </div>
        )
    }
    return(
        <div className="mainView">
            <DrawTable Table={detailView} editable={false}/>
        </div>
    )
}

export { PurchaseDetail }
