import { useState, useEffect, useContext } from "react";
import { getSalesDetail } from "../api/getsalesdetail";
import DrawTable from "../../../misc/minorcomponents/tables";
import { LoadingContext } from "../..";
const salesinfo = require("../store/salesinfo");


function SalesTransactions(){
    let [ detailView, setDetailView] = useState([...salesinfo]);
    let [isLoading, setLoading] = useState(true)
    let [content, setContent] = useState("hide")
    let { LoadingIndicator } = useContext(LoadingContext)

    useEffect(()=>{
        getSalesDetail(setDetailView).then(()=>{
            setLoading(false);
            setContent("mainView")
        }).catch(()=>{
            setLoading(false);
            setContent("mainView")
        })
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

export { SalesTransactions }
