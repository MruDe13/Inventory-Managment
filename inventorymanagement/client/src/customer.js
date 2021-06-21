import DrawTable from "./minorcomponents/tables";
import { customerInfo } from "./store/customer";
import { useState} from 'react';
import Modal from "./minorcomponents/modal";

function Customer(){

    let [show, setShow] = useState(false);
    let [index, setIndex] = useState(-1);

    function changeDialogStatus(indexValue){
        console.log("Change dialog status" + indexValue);
        setIndex(indexValue);
        setShow(true);
    }

    function closeDialog(){
        setShow(false)
    }

    return (
        <div>
            <DrawTable Table={customerInfo} editable={true} changeDialogStatus={changeDialogStatus}/>
            <Modal show={show} index={index} closeDialog={closeDialog} store={customerInfo}/>
        </div>
    )
}

export default Customer;