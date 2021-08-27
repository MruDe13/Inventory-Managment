import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { VendorField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import { modalConfirm, modalAlert } from "../../../modals";

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

    async function submitHandler(){
        let confirmation = await modalConfirm.confirm("Do you want to proceed?");
        if(confirmation){
            MakePostAPI('vendortable', form).then(()=>{
                modalAlert.alert("Successful!");
            }).catch(()=>{
                modalAlert.alert("Failed!");
            });
        } else {
            modalAlert.alert("Operation Canceled!");    
        }
    }

    return(
        <div className="EntryForm" onChange={changeHandler}>
            <div className="FormTitle">
                <h2>Vendor Details</h2>
            </div>
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
