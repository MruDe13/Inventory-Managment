import { useState, useEffect, useContext } from "react";
import { getProductionDetail } from "../api/getproductiondetail";
import DrawTable from "../../../misc/minorcomponents/tables";
import { LoadingContext } from "../..";
const productioninfo = require("../store/productioninfo");

function ProductionDetail(){
    let [ detailView, setDetailView] = useState([...productioninfo]);
    let [isLoading, setLoading] = useState(true);
    let [content, setContent] = useState("hide");
    let { LoadingIndicator } = useContext(LoadingContext);

    useEffect(()=>{
        getProductionDetail(setDetailView).then(()=>{
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

export { ProductionDetail }
