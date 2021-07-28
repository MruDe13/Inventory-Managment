import { useState } from 'react';
import { VendorDetails } from '../../../../../../apicalls/modelclass';
import PostInventoryDetails from '../../../../../../apicalls/makepostapi';
import LoadingIndicator from '../../../../../../minorcomponents/loadingIndicator';
import { TextBox, Button } from '../../../../../../sharedcomponents/textbox';
import "../../newentry.css";


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
                <div className='NewEntryBox' onChange={changeHandler}>
                    <div className="NewEntryBoxField">
                        <TextBox type="text" label="Shop Name*" id="name"/>
                        <TextBox type="text" label="Shop's Owner Name*" id="owner_name"/>
                    </div>
                    <div className="NewEntryBoxField">
                        <TextBox type="text" label="Address*" id="address"/>
                        <TextBox type="text" label="Pan Number" id="pan_number"/>
                    </div>
                    <div className="NewEntryBoxField">
                        <TextBox type="number" label="Phone Number" id="phone_number"/>
                        <TextBox type="email" label="Email Address" id="email"/>
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

export default VendorEntry;

