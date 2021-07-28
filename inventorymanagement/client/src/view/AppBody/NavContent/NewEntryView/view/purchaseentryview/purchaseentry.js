import { useState, useEffect } from 'react';
import { Purchase_Book } from '../../../../../../apicalls/modelclass';
import PostInventoryDetails from '../../../../../../apicalls/makepostapi';
import LoadingIndicator from '../../../../../../minorcomponents/loadingIndicator';
import GetItemList from '../../../../../../store/itemlist';
import "../../newentry.css";
import { TextBox , SelectBox, Button} from '../../../../../../sharedcomponents/textbox';
import { store } from '../../../../../../store/context';

function  PurchaseEntry(){

    let [formView, setFormView] = useState(new Purchase_Book());
    let [loading, setLoading] = useState(false);
    let [itemList, setItemList] = useState([])
    let keys = Object.keys(formView);

    useEffect(()=>{
        GetItemList().then(()=>{
            setItemList([...store["itemList"]])
        })
    },[]);
    

    function changeHandler(event){
        let id = event.target.id;
        console.log(id);
        let i;
        for (i in keys){
            if (keys[i] === id){
                formView[id] = event.target.value;
            }
        }
        console.log(formView);
    }

    function clickHandler(){
        setLoading(true);
        console.log(formView);
        let confirmation = window.confirm('Do you want to proceed?');
        
        if(confirmation){
            PostInventoryDetails('purchasetable', formView).then(()=>{
                setLoading(false);
            }).catch(()=>{
                setLoading(false);
            });
        } else {
            alert("Operation Canceled!");
            setLoading(false);
        }
        
    }

    function isLoading(){
        return loading;
    }
    let tempDisplay = !isLoading() ? 'EntryBox' : 'hide';
    return(
        <div>
            <div className={tempDisplay}>
                <div className='NewEntryBox' onChange={changeHandler}>
                    <div className='NewEntryBoxField'>
                        <TextBox type="text" label="Bill Number " id="bill_number"/>  
                    </div>
                    <div className='NewEntryBoxField'>
                        <TextBox type="text" label="Name Required*" id="name"/>
                        <TextBox type="number" label="Quantity*" id="quantity"/>
                    </div>
                    <div className='NewEntryBoxField'>
                        <TextBox type="number" label="Bill Amount*" id="bill_amount"/>
                        <TextBox type="number" label="Paid Amount" id="paid_amount"/>
                    </div>
                    <div className='NewEntryBoxField'>
                        <TextBox type="date" label="Date" id="date"/>
                        <TextBox type="number" label="Delivered Qt." id="delivery_quantity" />
                    </div>
                    <div className='NewEntryBoxField'>
                        <SelectBox list={itemList} label="Item " id="item"/>
                        <SelectBox list={["Delivered", "Not Delivered"]} label="Delivery Status" id="delivery_status"/>   
                    </div>
                </div>
                <div className="button-Submit">
                    <Button buttonText="Submit" onClick={clickHandler}/>
                </div>  
            </div>
            <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export default PurchaseEntry;

