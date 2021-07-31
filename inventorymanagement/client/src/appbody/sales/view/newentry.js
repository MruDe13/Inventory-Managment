import { TextBox, DisabledTextBox, Button } from "../../../sharedcomponents/textbox";
import { SalesField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";

function Newentry(){

    let [billNumber, setBillNumber] = useState(uniqueNumber());
    let [ form , setForm] = useState(new SalesField());
    let keys = Object.keys(form);

    form.billNumber = billNumber;
    
    function uniqueNumber(){
        let date = new Date();
        let billNumber = date.getDate().toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMonth().toString() + date.getUTCMinutes().toString() + date.getSeconds().toString();
        
        return billNumber
    }

    function refreshBillNumber(){
        setBillNumber(uniqueNumber())
    }
    
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
            MakePostAPI('salestable', form).then(()=>{
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
                <DisabledTextBox type="text" label="Bill Number" id=" billNumber" value={billNumber}/>
                <button onClick={refreshBillNumber}>Refresh</button>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Buyer Name" id="buyerName"/>
                <TextBox type="number" label="Quantity" id="quantity"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="date" label="Date" id="date"/>
                <TextBox type="text" label="Bill Amount" id="billAmount"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Discount %" id="discountPercent"/>
                <TextBox type="text" label="Discount Amount" id="discountAmount"/>   
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Amount Received" id="amountReceived"/>
                <TextBox type="text" label="Total Amount" id="totalAmount"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
