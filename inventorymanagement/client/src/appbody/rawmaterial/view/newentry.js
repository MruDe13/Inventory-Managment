import { TextBox,Button } from "../../../sharedcomponents/textbox";
import { RawMaterialField } from "../store/class";

function Newentry(){
    return(
        <div className="EntryForm">
            <div className="EntryFormContent">
                <TextBox type="text" label="Raw Material Name*" id="rawMaterialName"/>
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
