import DrawTable from '../../../../minorcomponents/tables';
import {useState } from 'react';
import { edits } from "../../../../store/edits";
import '../../../../App.css';

function Vendor(){
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
            <DrawTable Table={vendorList} editable={false} />
            </div>
        </div>
    )
}

export default Vendor;

