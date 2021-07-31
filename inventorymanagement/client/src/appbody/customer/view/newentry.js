import { TextBox, Button } from "../../../sharedcomponents/textbox";

function Newentry(){
    return(
        <div className="EntryForm">
            <div className="EntryFormContent">
                <TextBox type="text" label="Shop Name*" id="customerName"/>
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
                <Button buttonText="Submit"/>
            </div>
        </div>
    )
}

export { Newentry }
