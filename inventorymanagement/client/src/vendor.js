import { VendorOrders } from "./store/vendor";
import DrawTable from './table/tables';

function Vendor(){

    return (
        <div>
            <DrawTable Table={VendorOrders}/>
        </div>
    )
}

export default Vendor;