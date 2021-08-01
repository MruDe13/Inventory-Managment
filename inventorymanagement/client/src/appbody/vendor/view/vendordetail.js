import { useState, useEffect } from "react";
import { vendorinfo } from "../store/vendorinfo";
import { getVendorDetail } from "../api/getvendordetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function VendorDetail(){
    let [ detailView, setDetailView] = useState([...vendorinfo]);

    useEffect(()=>{
        getVendorDetail().then(()=>{
            setDetailView([...vendorinfo])
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

export { VendorDetail }
