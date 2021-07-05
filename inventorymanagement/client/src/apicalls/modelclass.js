export class VendorDetails {
    constructor() {
        this.name = null;
        this.owner_name = null;
        this.address = null;
        this.phone_number = null;
        this.email = null;
        this.pan_number = null;
        this.gst_number = null;
        // Object.seal(this);
    }

}

export class Purchase_Book {
    constructor(){
        // this.vendor_id = 0;
        // this.item_id = 0;
        this.name="";
        this.item="";
        this.quantity = 0;
        this.bill_amount = 0;
        this.paid_amount = 0;
        this.date = "";
        this.bill_number = null;
        this.delivery_status = null;
        this.delivery_quantity = 0;
    }
}

export class Raw_Material_StockBook {
    constructor(){
        this.item_id = 0;
        this.total_purchased = 0;
        this.available = 0;
    }
}

export class Item {
    constructor(){
        this.name = "";
        this.remakrs = "";
    }
}

