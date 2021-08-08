import { TextBox, DisabledTextBox, Button } from "../../../sharedcomponents/textbox";
import { SalesField } from "../store/class";
import { useRef, useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import {icons} from "../../../resources/index";

function Newentry(){

    let [billNumber, setBillNumber] = useState(uniqueNumber());
    let [ form , setForm] = useState(new SalesField());
    const discountPercentRef = useRef(null);
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

        if (id === "discountPercent"){
            form.discountAmount = ((Number(form.billAmount) * Number(form[id])) / 100);
            form.totalAmount = (Number(form.billAmount) - Number(form.discountAmount));
            setForm({...form});
            discountPercentRef.current.focus();
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
                <div style={{display:"flex", marginTop:"2rem", marginLeft:"2rem"}}><img src={icons["refresh"]} onClick={refreshBillNumber}/></div>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Customer Name" id="customerName" defaultValue={form.buyerName}/>
                <TextBox type="number" label="Quantity" id="quantity" defaultValue={form.quantity}/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="date" label="Date" id="date" defaultValue={form.date}/>
                <TextBox type="text" label="Bill Amount" id="billAmount" defaultValue={form.billAmount}/>
            </div>
            <div className="EntryFormContent">
                <TextBox ref={discountPercentRef} type="text" label="Discount %" id="discountPercent" defaultValue={form.discountPercent}/>
                <TextBox type="text" label="Discount Amount" id="discountAmount" defaultValue={form.discountAmount}/>   
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Amount Received" id="amountReceived" defaultValue={form.amountReceived}/>
                <TextBox type="text" label="Total Amount" id="totalAmount" defaultValue={form.totalAmount}/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
