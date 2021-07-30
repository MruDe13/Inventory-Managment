import { TextBox, Button } from "../../../../../../sharedcomponents/textbox";
import { useState } from "react";
import { icons } from "../../../../../../resources";


function SalesEntry(){

    let [billNumber, setBillNumber] = useState(uniqueNumber());
    
    function uniqueNumber(){
        let date = new Date();
        let billNumber = date.getDate().toString() + date.getFullYear().toString() + date.getHours().toString() + date.getMonth().toString() + date.getUTCMinutes().toString() + date.getSeconds().toString()
        
        return billNumber
    }

    function refreshBillNumber(){
        setBillNumber(uniqueNumber())
    }

    return(
        <div>
            <div className='NewEntryBox'>
                <div className='NewEntryBoxField'>
                    <span className="Bill-Number">Bill No : {billNumber}<img className="Bill-Number-Refresh" src={icons['Refresh']} onClick={refreshBillNumber}/></span>  
                </div>
                <div className='NewEntryBoxField'>
                    <TextBox type="text" label="Name Required*" id="name"/>
                    <TextBox type="number" label="Quantity*" id="quantity"/>
                </div>
                <div className='NewEntryBoxField'>
                    <TextBox type="number" label="Bill Amount*" id="bill_amount"/>
                    <TextBox type="number" label="Amount Received*" id="amount_received"/>
                </div>
                <div className='NewEntryBoxField'>
                    <TextBox type="date" label="Date" id="date"/>
                    <TextBox type="text" label="Contact / Address" id="contact" />
                </div>
                <div className='NewEntryBoxField'>
                    <TextBox type="text" label="Item" id="item"/> 
                    <TextBox type="text" label="Remarks" id="remarks"/>  
                </div>
            </div>
            <div className="button-Submit">
                    <Button buttonText="Submit" />
            </div> 
        </div>
    )
}

export default SalesEntry;