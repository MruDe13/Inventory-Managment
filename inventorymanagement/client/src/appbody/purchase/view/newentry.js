import { TextBox, Button } from "../../../sharedcomponents/textbox";
import { PurchaseField } from "../store/class";

function Newentry(){
    return(
        <div className="EntryForm">
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
                <Button buttonText="Submit"/>
            </div>
        </div>
    )
}

export { Newentry }
