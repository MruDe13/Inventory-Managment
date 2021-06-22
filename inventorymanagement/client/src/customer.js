import DrawTable from "./minorcomponents/tables";
import { customerInfo } from "./store/customer";

function Customer(props){


    return (
        <div>
            <DrawTable Table={customerInfo} editable={true} changeDialogStatus={props.changeDialogStatus}/>
        </div>
    )
}

export default Customer;