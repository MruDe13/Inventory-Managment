import { useState, useEffect } from "react";
import { vendorinfo } from "../../vendor/store/vendorinfo";
import { getProductsDetail } from "../api/getproductsdetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function ProductDetail(){
    let [ detailView, setDetailView] = useState([...vendorinfo]);

    useEffect(()=>{
        getProductsDetail().then(()=>{
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

export { ProductDetail }
