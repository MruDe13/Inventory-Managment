import { VendorOrders } from "./store/vendor";
import DrawTable from './minorcomponents/tables';

function Vendor(props){

    return (
        <div>
            <DrawTable Table={VendorOrders} editable={true} changeDialogStatus={props.changeDialogStatus}/>
        </div>
    )
}

export default Vendor;