import PurchaseEntry from "./purchaseentryview/purchaseentry";
import SalesEntry from "./salesentryview/salesentry";
import VendorEntry from "./vendorentryview/vendorentry";
import ItemEntry from "./itementryview/itementry";

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