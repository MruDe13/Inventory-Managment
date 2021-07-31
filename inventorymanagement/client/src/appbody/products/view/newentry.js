import { TextBox, Button } from "../../../sharedcomponents/textbox";


function Newentry(){

    function changeHandler(){

    }

    function submitHandler(){

    }
    return(
        <div className="EntryForm">
            <div className="EntryFormContent">
                <TextBox type="text" label="Product Name*" id="productName"/>
                <TextBox type="text" label="Type" id="type"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Remarks" id="remarks"/>
                <TextBox type="number" label="Minimum Qty." id="minimumQuantity"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit"/>
            </div>
        </div>
    )
}

export { Newentry }
