import DrawTable from "../minorcomponents/tables";
import { useState } from 'react';
import { edits } from "../store/edits";
import DailyBook from "./dailybook";
import onRowEdit from "./rowedit";

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

    function Edit(index){
        onRowEdit(index, stockList, props.changeDialogStatus)
    }

    return (
        <div>
            <div>
                <DrawTable Table={stockList} editable={true} onClick={Edit}/>
            </div>
            <div style={{marginTop:'3%'}}>
                <button> USE </button>
            </div>
            <DailyBook/>
        </div>
    )
}

export default  StockDetails;