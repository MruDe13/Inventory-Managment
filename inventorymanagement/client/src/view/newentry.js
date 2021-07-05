import '../App.css';
import PostInventoryDetails from '../apicalls/postapi';
import { Purchase_Book, VendorDetails } from '../apicalls/modelclass';
import { useState } from 'react';
import TranscationBox from './transactionbox';

function NewEntry() {
    // let Items = ['Chair', 'Table', 'Desk', 'Wheels'];
    // let [formView, setFormView] = useState(new Purchase_Book());
    let [Transaction, setTransaction] = useState('Purchase');

    function changeHandler(event){
        setTransaction(event.target.value);
    }


    return(
        <div className='NewEntry'>
            <div className='EntryDetails'>
                <label>Transaction Type : </label>
                <select name="SelectList" id='TRANSACTION' onChange={changeHandler}>
                    <option  value='Purchase'>Purchase</option>
                    <option  value='Sale'>Sales</option>
                    <option  value='Vendor'>Vendor</option>
                </select>
            </div>
            <div >
                <TranscationBox entry={Transaction}/>
            </div>
        </div>
    )
    
    // return (
    //         <div className='NewEntry' onChange={changeHandler}>
    //             <div className='EntryBoxOne'>
    //                 <div className='EntryDetails'>
    //                     <div className="SelectList">
                        //     <label>Transaction Type : </label>
                        //     <select name="SelectList" id='TRANSACTION'>
                                
                        //         <option value="Purchase" value='Purchase'>Purchase</option>
                        //         <option value="Sales" value='Sale'>Sales</option>
                        //     </select>
                        // </div>
    //                     <div className= 'CustomerDetails'>
    //                         <label> Customer/Vendor Name: </label>
    //                         <input placeholder='Enter Name..' type='text' maxLength='100' id='name' ></input>
    //                         <br></br>
    //                         <label>Owner Name</label>
    //                         <input id='owner_name'></input>
    //                     </div>
    //                     <div className= 'CustomerDetails'>
    //                         <label>Address : </label>
    //                         <input id='address'></input>
    //                         <label>Pan No.</label>
    //                         <input id='pan_number'></input>
    //                     </div>
    //                     <div className= 'CustomerDetails'>
    //                         <label>Contact : </label>
    //                         <input placeholder='Phone No.' id='phone_number'></input>
    //                     </div>   
    //                 </div>
    //                 <div>

    //                 </div>
    //             </div>
    //             <div className='EntryBoxTwo'>
    //                 <div className='EntryDetails'>
    //                     <div className='GoodsDetails'>
    //                         <label>Item Name : </label>
    //                         <select id='item'>
    //                             {Items.map((itemtype) => {
    //                                 return(
    //                                     <option value={itemtype}>{itemtype}</option>
    //                                 )
    //                             })}
    //                             <option value='Others'>Others</option>
    //                         </select>
    //                     </div>
    //                     <div className='GoodsDetails'>
    //                         <label>Quantity</label>
    //                         <input type='Number' placeholder='No. of Items' id='quantity'></input>
    //                     </div>
    //                     <div className='GoodsDetails'>
    //                         <label>Total Amount: </label>
    //                         <input placeholder='Total Amount' id='bill_amount'></input>
    //                     </div>
    //                     <div className='GoodsDetails'>
    //                         <label>Amount Paid: </label>
    //                         <input placeholder='Amount Paid' id='paid_amount'></input>
    //                     </div>
    //                     <div className='GoodsDetails'>
    //                         <label>Date : </label>
    //                         <input type='Date' id='date'></input>
    //                     </div>
    //                     <div className='GoodsDetails'>
    //                         <button onClick={clickHandler} > Submit </button>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>
        
    // )
}

export default NewEntry;

