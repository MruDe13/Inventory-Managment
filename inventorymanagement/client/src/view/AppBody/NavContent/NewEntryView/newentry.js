import "./newentry.css";
import { useState } from 'react';
import TranscationBox from './view/transactionbox';
import { SelectBox } from "../../../../sharedcomponents/textbox";

function NewEntry() {

    let [Transaction, setTransaction] = useState('Purchase');
    let transactionType = ["Purchase", "Sale", "Vendor", "Item"]
    function changeHandler(event){
        setTransaction(event.target.value);
    }

    return(
        <div className='NewEntry'>
            <div className='Transaction-Type'>
                <SelectBox list={transactionType} label="Transaction Type " onChange={changeHandler}/>
            </div>
            <div >
                <TranscationBox entry={Transaction}/>
            </div>
        </div>
    )
}

export default NewEntry;

