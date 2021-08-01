import { useState, useEffect } from "react";
import { rawmaterialinfo } from "../store/rawmaterialinfo";
import { getRawMaterialDetail } from "../api/getrawmaterialdetail";
import DrawTable from "../../../misc/minorcomponents/tables";

function RawMaterialStock(){
    let [ detailView, setDetailView] = useState([...rawmaterialinfo]);

    useEffect(()=>{
        getRawMaterialDetail().then(()=>{
            setDetailView([...rawmaterialinfo])
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

export { RawMaterialStock }
