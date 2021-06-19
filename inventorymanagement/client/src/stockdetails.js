import { RawMaterial } from "./store/rawmaterial";
import './App.css'


import DrawTable from "./table/tables";

function StockDetails(){

    let currentStock = RawMaterial;

    return(
        <div>
           <DrawTable Table={currentStock}/> 
        </div>
    )
}

export default StockDetails;