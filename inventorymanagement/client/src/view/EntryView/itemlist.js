import { useState } from "react";
import { edits } from "../../store/edits";

function ItemList(){
    let [itemList, setItemList] = useState([]);
    edits["itemList"] = itemList;
    edits["setItemList"] = setItemList;

    if (itemList.length === 0){
        return(
            <select></select>
        )
    }

    return(
        <select id='item'>
            {itemList.map((item)=>{
                return (
                    <option value={item["name"]}>{item["name"]}</option>
                )
            })}
        </select>
    )
}

export default ItemList;

