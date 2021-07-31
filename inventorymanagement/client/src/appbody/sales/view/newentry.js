import { TextBox, DisabledTextBox, Button } from "../../../sharedcomponents/textbox";
import { useState } from "react";

function Newentry(){

    let [billNumber, setBillNumber] = useState(uniqueNumber());
    
    function uniqueNumber(){
        let date = new Date();
        let billNumber = date.getDate().toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMonth().toString() + date.getUTCMinutes().toString() + date.getSeconds().toString()
        
        return billNumber
    }

    function refreshBillNumber(){
        setBillNumber(uniqueNumber())
    }
    return(
        <div className="EntryForm">
            <div className="EntryFormContent">
                <DisabledTextBox type="text" label="Bill Number" id=" billNumber" defaultValue={billNumber}/>
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
                <Button buttonText="Submit"/>
            </div>
        </div>
    )
}

export { Newentry }
