import { useState, useEffect, useContext } from "react";
import { getRawMaterialDetail } from "../api/getrawmaterialdetail";
import DrawTable from "../../../misc/minorcomponents/tables";
import { LoadingContext } from "../..";
let rawmaterialinfo = require("../store/rawmaterialinfo");



function RawMaterialStock(){
    let [ detailView, setDetailView] = useState([...rawmaterialinfo]);
    let [isLoading, setLoading] = useState(true);
    let [content, setContent] = useState("hide");
    let { LoadingIndicator } = useContext(LoadingContext);

    useEffect(()=>{
        if (detailView.length === 0){
            getRawMaterialDetail(setDetailView).then(()=>{
                // setLoading(false);
                // setContent("mainView");
            }).catch(()=>{
                // setLoading(false);
                // setContent("mainView");
            })
            setLoading(false);
            setContent("mainView");
        }
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

export { RawMaterialStock }
