import { TextBox, Button , SelectBox} from "../../../sharedcomponents/textbox";

function Newentry(){
    return(
        <div className="EntryForm">
            <div className="EntryFormContent">
                <TextBox type="text" label="Buyer Name" id="buyerName"/>
                <TextBox type="number" label="Quantity" id="quantity"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="date" label="Date" id="date"/>
                <TextBox type="text" label="Bill Amount" id="billAmount"/>
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Discount %" id="discountPercent"/>
                <TextBox type="text" label="Discount Amount" id="discountAmount"/>   
            </div>
            <div className="EntryFormContent">
                <TextBox type="text" label="Amount Received" id="amountReceived"/>
                <TextBox type="text" label="Total Amount" id="totalAmount"/>
            </div>
            <div className="EntryFormContent">
                <Button buttonText="Submit"/>
            </div>
        </div>
    )
}

export { Newentry }
