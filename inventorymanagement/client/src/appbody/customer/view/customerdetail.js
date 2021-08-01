import { useState, useEffect } from "react";
import { customerinfo } from "../store/customerinfo";
import { getCustomerDetail } from "../api/getcustomerdetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function CustomerDetail(){
    let [ detailView, setDetailView] = useState([...customerinfo]);

    useEffect(()=>{
        getCustomerDetail().then(()=>{
            setDetailView([...customerinfo])
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

export { CustomerDetail }
