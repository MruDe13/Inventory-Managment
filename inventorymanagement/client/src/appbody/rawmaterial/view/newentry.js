import { TextBox,Button } from "../../../sharedcomponents/textbox";
import { RawMaterialField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import { modalConfirm, modalAlert } from "../../../modals";

function Newentry(){

    let [ form , setForm] = useState(new RawMaterialField());
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
            MakePostAPI('rawmaterialtable', form).then(()=>{
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
                <h2>Raw Material Details</h2>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Raw Material Name*" id="rawMaterialName"/>
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
