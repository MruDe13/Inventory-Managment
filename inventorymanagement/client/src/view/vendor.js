import DrawTable from '../minorcomponents/tables';
import {useState , useEffect} from 'react';
import { edits } from "../store/edits";


function Vendor(props){
    let [vendorList, setVendorList] = useState([]);

    edits['setVendorList'] = setVendorList;
    edits['vendorList'] = vendorList;
    
    if (vendorList.length === 0){
        return (
            <div> VENDOR LIST IS EMPTY </div>
        )
    }

    return (
        <div>
            <div>
            <DrawTable Table={vendorList} editable={false} changeDialogStatus={props.changeDialogStatus}/>
            </div>
            <div style={{marginTop:'3%'}}>
                <button>Add Vendor</button>
            </div>
        </div>
    )
}

export default Vendor;

