import { useState } from 'react';
import { VendorDetails } from '../../apicalls/modelclass';
import PostInventoryDetails from '../../apicalls/postapi';
import LoadingIndicator from '../../minorcomponents/loadingIndicator';


function VendorEntry(){

    let [formView, setFormView] = useState(new VendorDetails());
    let [loading, setLoading] = useState(false);

    let keys = Object.keys(formView);
    console.log(keys);

    function changeHandler(event){
        let id = event.target.id;
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
        let confirmation = window.confirm('Do you want to proceed?');
        if (confirmation){
            PostInventoryDetails('vendortable', formView).then(()=>{
                setLoading(false);
            }).catch(()=>{
                setLoading(false);
            })
        } else {
            alert('Cancelled!');
            setLoading(false);
        }
    }
    
    function isLoading(){
        return loading;
    }
    let tempDisplay = !isLoading() ? '' : 'hide';

    return(
        <div>
        <div className={tempDisplay}>
            <div className='EntryBox' onChange={changeHandler}>
                <section>
                    <label>Vendor : </label>
                    <input placeholder='Enter name..' id='name'/>
                    <label>Owner's Name :</label>
                    <input id='owner_name'/>
                    <label>Address : </label>
                    <input id='address'/>
                    <label> Pan No. :</label>
                    <input id='pan_number'/>
                </section>
                <section>
                    <label> Gst No. :</label>
                    <input id='gst_number'/>
                    <label>Phone no. :</label>
                    <input id='phone_number'/>
                    <label>Email :</label>
                    <input id='email'/>
                    <button onClick={clickHandler}>Submit</button>
                </section>
                
            </div>
            
        </div>
            <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export default VendorEntry;

