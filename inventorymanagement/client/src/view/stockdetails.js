import { RawMaterial } from "../store/rawmaterial";
import '../App.css'
import DrawTable from "../minorcomponents/tables";

function StockDetails(props){



    return(
        <div>
           <DrawTable Table={RawMaterial} editable={true} changeDialogStatus={props.changeDialogStatus} />
           
        </div>
    )
}

export default StockDetails;