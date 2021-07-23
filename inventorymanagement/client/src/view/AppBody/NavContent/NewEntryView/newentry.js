import '../../../../App.css';
import { useState } from 'react';
import TranscationBox from './view/transactionbox';

function NewEntry() {

    let [Transaction, setTransaction] = useState('Purchase');

    function changeHandler(event){
        setTransaction(event.target.value);
    }

    return(
        <div className='NewEntry'>
            <div className='EntryDetails'>
                <label>Transaction Type : </label>
                <select name="SelectList" id='TRANSACTION' onChange={changeHandler}>
                    <option  value='Purchase'> Purchase </option>
                    <option  value='Sale'> Sales </option>
                    <option  value='Vendor'> Vendor </option>
                    <option value='Item'> Item </option>
                </select>
            </div>
            <div >
                <TranscationBox entry={Transaction}/>
            </div>
        </div>
    )
}

export default NewEntry;

