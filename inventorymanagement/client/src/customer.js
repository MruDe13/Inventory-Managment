import DrawTable from "./table/tables";
import { customerInfo } from "./store/customer";

function Customer(){

    return (
        <div>
            <DrawTable Table={customerInfo}/>
        </div>
    )
}

export default Customer;