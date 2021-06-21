import { RawMaterial } from "./store/rawmaterial";
import './App.css'

import { useState } from "react";
import DrawTable from "./minorcomponents/tables";
import Modal from "./minorcomponents/modal";

function StockDetails(){



    return(
        <div>
           <DrawTable Table={RawMaterial} />
           
        </div>
    )
}

export default StockDetails;