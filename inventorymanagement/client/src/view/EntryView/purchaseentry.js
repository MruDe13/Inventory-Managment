import { useState } from 'react';
import { Purchase_Book } from '../../apicalls/modelclass';
import PostInventoryDetails from '../../apicalls/postapi';
import LoadingIndicator from '../../minorcomponents/loadingIndicator';
import ItemList from './itemlist';
import GetItemList from '../../store/itemlist';

function PurchaseEntry(){

    let [formView, setFormView] = useState(new Purchase_Book());
    let [loading, setLoading] = useState(false);

    let keys = Object.keys(formView);
    console.log(keys);
    GetItemList();

    function changeHandler(event){
        let id = event.target.id;
        let i;
        for (i in keys){
            if (keys[i] === id){
                formView[id] = event.target.value;
            }
        }
    }

    function clickHandler(){
        console.log(formView);
        setLoading(true);
        
        PostInventoryDetails('purchasedetail', formView).then(()=>{
            setLoading(false);
        }).catch(()=>{
            setLoading(false);
        });
    }

    function isLoading(){
        return loading;
    }
    let tempDisplay = !isLoading() ? 'EntryBox' : 'hide';
    return(
        <div>
        <div className={tempDisplay} onChange={changeHandler}>
            <div className='EntryBoxView'>
                <div className='EntryBoxComponent'>
                    <label>Vendor's Name : </label>
                    <input placeholder="Enter name..." type='text' id='name'/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Item :</label>
                    <ItemList/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Quantity: </label>
                    <input type='number' id='quantity'/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Date: </label>
                    <input type='date' id='date'/>
                </div>
                <div>
                    <button onClick={clickHandler}> Submit </button>
                </div>
            </div>
            <div className='EntryBoxView'>
                <div className='EntryBoxComponent'>
                    <label>Bill No. </label>
                    <input id='bill_number'/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Bill Amount: </label>
                    <input type='number' id='bill_amount'/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Paid Amount: </label>
                    <input type='number' id='paid_amount'/>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Delivery Status : </label>
                    <select id='delivery_status'>
                        <option value='Delivered'>Delivered</option>
                        <option value='Not Delivered'>Not Delivered</option>
                    </select>
                </div>
                <div className='EntryBoxComponent'>
                    <label>Delivered Quantity : </label>
                    <input type='number' id='delivery_quantity'/>
                </div>
                
            </div>
            
        </div>
        <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export default PurchaseEntry;

