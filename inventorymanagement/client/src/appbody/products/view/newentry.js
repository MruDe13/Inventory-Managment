import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { ProductsField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";

function Newentry(){

    let [ form , setForm] = useState(new ProductsField());
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
            MakePostAPI('productstable', form).then(()=>{
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
                <TextBox type="text" label="Product Name*" id="productName"/>
                <TextBox type="text" label="Type" id="type"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Remarks" id="remarks"/>
                <TextBox type="number" label="Minimum Qty." id="minimumQuantity"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }