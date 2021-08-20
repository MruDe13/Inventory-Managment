import { DisabledTextBox, TextBox, Button } from "../../../sharedcomponents/textbox";
import { ProductionField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import { modalConfirm, modalAlert } from "../../../modals";

function Newentry(){

    let [ form , setForm] = useState(new ProductionField());
    let keys = Object.keys(form);
    let today = new Date().toLocaleDateString();
    form.date = today;

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
            MakePostAPI('productiontable', form).then(()=>{
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
                <TextBox type="text" label="Product Name*" id="productName"/>
                <DisabledTextBox type="text" label="Date" id="date" value={today}/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="number" label="Quantity" id="quantity"/>
                <TextBox type="text" label="remarks" id="remarks"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
