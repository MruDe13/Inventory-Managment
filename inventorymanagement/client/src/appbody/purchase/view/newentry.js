import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { PurchaseField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";

function Newentry(){

    let [ form , setForm] = useState(new PurchaseField());
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
            MakePostAPI('purchasetable', form).then(()=>{
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
                <TextBox type="text" label="Item" id="rawMaterialName"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Bill Number" id="billNumber"/>
                <TextBox type="date" label="Date" id="date"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Quantity" id="quantity"/>
                <TextBox type="text" label="Total Cost" id="totalCost"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Damaged Qty." id="damagedQuantity"/>
                <TextBox type="text" label="Amount Paid" id="amountPaid"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
