import { TextBox, DisabledTextBox, Button } from "../../../sharedcomponents/textbox";
import { SalesField } from "../store/class";
import { useRef, useState, useEffect } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import {icons} from "../../../resources/index";
import { modalConfirm, modalAlert } from "../../../modals";

function Newentry(){

    let [billNumber, setBillNumber] = useState(uniqueNumber());
    let [ form , setForm] = useState(new SalesField());
    let discountPercentRef = useRef();
    let discountAmountRef = useRef();
    let totalAmountRef = useRef();
    let focusRef = useRef("");
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
            focusRef.current = "discountPercent";
            form.discountAmount = ((Number(form.billAmount) * Number(form.discountPercent)) / 100).toFixed(2);
            form.totalAmount = (Number(form.billAmount) - Number(form.discountAmount)).toFixed(2);
            setForm({...form});
        }
        if (id === "discountAmount"){
            focusRef.current = "discountAmount";
            form.totalAmount = (Number(form.billAmount) - Number(form.discountAmount)).toFixed(2);
            form.discountPercent = ((Number(form.discountAmount)/Number(form.billAmount))* 100).toFixed(2);
            setForm({...form});
        }

        if(id==="totalAmount"){
            focusRef.current = "totalAmount";
            form.discountAmount = Number(form.billAmount) - Number(form.totalAmount).toFixed(2);
            form.discountPercent = (Number(form.discountAmount)/Number(form.billAmount)* 100 ).toFixed(2) ;
            setForm({...form});
        }
        console.log(form)
    }
    useEffect(()=>{
        console.log("MonsteR", form.discountAmount);
        if(focusRef.current === "discountPercent"){
            discountPercentRef.current.focus();
        }
        if(focusRef.current === "discountAmount"){
            discountAmountRef.current.focus();
        }
        if(focusRef.current === "totalAmount"){
            totalAmountRef.current.focus();
        }
        
    }, [form.discountAmount, form.discountPercent, form.totalAmount])

    async function submitHandler(){
        let confirmation = await modalConfirm.confirm("Do you want to proceed?");
        if(confirmation){
            MakePostAPI('salestable', form).then(()=>{
                modalAlert.alert("Successful!");
                window.location.reload();
            }).catch(()=>{
                modalAlert.alert("Failed!");
            });
        } else {
            modalAlert.alert("Operation Canceled!");    
        }
    }


    return(
        <div className="EntryForm" onChange={changeHandler}>
            <div className="EntryFormContent">
                <TextBox type="text" label="Customer Name" id="customerName" defaultValue={form.buyerName}/>
                <DisabledTextBox type="text" label="Bill Number" id=" billNumber" value={billNumber}/>
                <div style={{display:"flex", marginTop:"2rem", marginLeft:"2rem"}}><img src={icons["refresh"]} onClick={refreshBillNumber}/></div>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Product Name" id="productName" defaultValue={form.productName}/>
                <TextBox type="number" label="Quantity" id="quantity" defaultValue={form.quantity}/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="date" label="Date" id="date" defaultValue={form.date}/>
                <TextBox type="text" label="Bill Amount" id="billAmount" defaultValue={form.billAmount}/>
            </div>
            <div className="EntryFormContent">
                <TextBox setref={discountPercentRef} type="text" label="Discount %" id="discountPercent" defaultValue={form.discountPercent}/>
                <TextBox setref={discountAmountRef} type="text" label="Discount Amount" id="discountAmount" defaultValue={form.discountAmount}/>   
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Amount Received" id="amountReceived" defaultValue={form.amountReceived}/>
                <TextBox setref={totalAmountRef} type="text" label="Total Amount" id="totalAmount" defaultValue={form.totalAmount}/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
