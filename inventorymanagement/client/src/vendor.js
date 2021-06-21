import { VendorOrders } from "./store/vendor";
import DrawTable from './minorcomponents/tables';

function Vendor(){

    return (
        <div>
            <DrawTable Table={VendorOrders}/>
        </div>
    )
}

export default Vendor;