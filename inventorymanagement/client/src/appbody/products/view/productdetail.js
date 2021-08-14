import { useState, useEffect, useContext } from "react";
import { getProductsDetail } from "../api/getproductsdetail";
import DrawTable from "../../../misc/minorcomponents/tables";
import { LoadingContext } from "../..";
const productsinfo = require("../store/productsinfo");

function ProductDetail(){
    let [ detailView, setDetailView] = useState([...productsinfo]);
    let [isLoading, setLoading] = useState(true);
    let [content, setContent] = useState("hide");
    let { LoadingIndicator } = useContext(LoadingContext);

    useEffect(()=>{
        getProductsDetail(setDetailView).then(()=>{
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

export { ProductDetail }
