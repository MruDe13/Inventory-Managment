import PurchaseEntry from "./purchaseentry";
import SalesEntry from "./salesentry";
import VendorEntry from "./vendorentry";
import ItemEntry from "./itementry";

function TranscationBox(props){
    if(props.entry === 'Purchase'){
        return (
            <PurchaseEntry/>
        )
    }

    if(props.entry === 'Sale'){
        return (
            <SalesEntry/>
        )
    }

    if(props.entry === 'Vendor'){
        return(
            <VendorEntry/>
        )
    }

    if (props.entry === 'Item'){
        return(
            <ItemEntry/>
        )
    }
}

export default TranscationBox;