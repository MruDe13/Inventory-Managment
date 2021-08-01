import { useState, useEffect } from "react";
import { salesinfo } from "../store/salesinfo";
import { getSalesDetail } from "../api/getsalesdetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function SalesTransactions(){
    let [ detailView, setDetailView] = useState([...salesinfo]);

    useEffect(()=>{
        getSalesDetail().then(()=>{
            setDetailView([...salesinfo])
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

export { SalesTransactions }
