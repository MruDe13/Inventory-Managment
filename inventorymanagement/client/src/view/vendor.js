import DrawTable from '../minorcomponents/tables';
import PurchaseBook from "../store/purchaselist";
import {useState , useEffect} from 'react';
import { edits } from "../store/edits";
import PostInventoryDetails from '../apicalls/postapi';


function Vendor(props){
    let [PurchaseList, setPurchaseList] = useState([]);

    PostInventoryDetails();

    edits['setPurchaseList'] = setPurchaseList;

    if (PurchaseList.length === 0){
        return (
            <div> </div>
        )
    }

    return (
        <div>
            <DrawTable Table={PurchaseList} editable={true} changeDialogStatus={props.changeDialogStatus}/>
        </div>
    )
}

export default Vendor;