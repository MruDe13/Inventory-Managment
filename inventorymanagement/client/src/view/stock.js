import DrawTable from "../minorcomponents/tables";
import { useState } from 'react';
import { edits } from "../store/edits";
import DailyBook from "./dailybook";

function  StockDetails(props){

    let [stockList, setStockList] = useState([]);
    let [dailyBook, setDailyBook] = useState(false);
    edits["stockList"] = stockList;
    edits["setStockList"] = setStockList;


    if (stockList.length === 0){
        return(
            <div> STOCK IS EMPTY </div>
        )
    }

    return (
        <div>
            <div>
                <DrawTable Table={stockList} editable={true} changeDialogStatus={props.changeDialogStatus}/>
            </div>
            <div style={{marginTop:'3%'}}>
                <button> USE </button>
            </div>
            <DailyBook/>
        </div>
    )
}

export default  StockDetails;