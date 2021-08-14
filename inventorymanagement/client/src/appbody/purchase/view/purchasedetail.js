import { useState, useEffect, useContext } from "react";
import { getPurchaseDetail } from "../api/getpurchasedetail";
import DrawTable from "../../../misc/minorcomponents/tables";
import { LoadingContext } from "../..";
const purchaseinfo = require("../store/purchaseinfo");


function PurchaseDetail(){
    let [ detailView, setDetailView] = useState([...purchaseinfo]);
    let [isLoading, setLoading] = useState(true);
    let [content, setContent] = useState("hide");
    let { LoadingIndicator } = useContext(LoadingContext);

    useEffect(()=>{
        getPurchaseDetail(setDetailView).then(()=>{
            // setLoading(false);
            // setContent("mainView")
        }).catch(()=>{
            // setLoading(false);
            // setContent("mainView")
        })
        setLoading(false);
        setContent("mainView")
    },[])

    if(detailView.length === 0){
        return(
            <div className="content">
                <div className={content}>
                    There are no entries.
                </div>
                <LoadingIndicator isLoading={isLoading}/>
            </div>
        )
    }
    return(
        <div className="content">
            <div className={content}>
                <DrawTable Table={detailView} editable={false}/>
            </div>
            <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export { PurchaseDetail }
