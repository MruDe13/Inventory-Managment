import DrawTable from '../../../../minorcomponents/tables';
import {useState, useEffect } from 'react';
import { edits } from "../../../../store/edits";
import '../../../../App.css';
import { VendorDetails } from '../../../../store';

function Vendor(){
    let [vendorList, setVendorList] = useState([]);

    edits['setVendorList'] = setVendorList;
    edits['vendorList'] = vendorList;

    useEffect(()=>{
        VendorDetails();
    }, [])
    
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

