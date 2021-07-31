import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { VendorField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";

function Newentry(){

    let [ form , setForm] = useState(new VendorField());
    let keys = Object.keys(form);

    function changeHandler(event){
        let id = event.target.id;
        console.log(id);
        let i;
        for (i in keys){
            if (keys[i] === id){
                form[id] = event.target.value;
            }
        }
        console.log(form);
    }

    function submitHandler(){

        let confirmation = window.confirm('Do you want to proceed?');
        
        if(confirmation){
            MakePostAPI('vendortable', form).then(()=>{
                window.location.reload();
            }).catch(()=>{
                console.log("Failed");
            });
        } else {
            alert("Operation Canceled!");
        }
        
    }

    return(
        <div className="EntryForm" onChange={changeHandler}>
            <div className="EntryFormContent">
                <TextBox type="text" label="Shop Name*" id="vendorName"/>
                <TextBox type="text" label="Owner Name" id="ownerName"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Phone Number*" id="phoneNumber"/>
                <TextBox type="address" label="Address" id="address"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="email" label="Email" id="email"/>
                <TextBox type="text" label="Gst. Number" id="gstNumber"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Pan Number" id="panNumber"/>
                <TextBox type="number" label="Payment Days" id="paymentDays"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler} />
            </div>
        </div>
    )
}

export { Newentry }
