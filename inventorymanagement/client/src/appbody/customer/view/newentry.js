import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { CustomerField } from "../store/class";
import { useState } from "react";
import MakePostAPI from "../../../apicalls/makepostapi";
import { modalConfirm, modalAlert} from "../../../modals";
import MakeGetAPI from "../../../apicalls/makegetapi";
import { Suggestions } from "../../../sharedcomponents/suggestion";

function Newentry(){

    let [ form , setForm] = useState(new CustomerField());
    let [nameSuggestion, setNameSuggestion] = useState([])
    let keys = Object.keys(form);

    async function changeHandler(event){
        let id = event.target.id;
        let newValue= event.target.value;
        let i;
        for (i in keys){
            if (keys[i] === id){
                form[id] = event.target.value;
            }
        }
        let suggestedNames = await(MakeGetAPI(`search?context=rawmaterialstock&searchParam=${newValue}`));
        let newArray = suggestedNames.slice(0,10);
        setNameSuggestion([...newArray]);
        console.log("Suggestion Set");
        console.log(form);
    }


    async function submitHandler(){
        let confirmation = await modalConfirm.confirm("Do you want to proceed?");
        if(confirmation){
            MakePostAPI('customertable', form).then(()=>{
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
                <h2>Customer Details</h2>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Shop Name*" id="customerName" list="customerNameSuggestion"/>
                <Suggestions suggestedList={nameSuggestion} datalistId="customerNameSuggestion" columnName="rawMaterialName" />
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
                <Button buttonText="Submit" onClick={submitHandler}/>
            </div>
        </div>
    )
}

export { Newentry }
