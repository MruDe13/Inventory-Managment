// [ checkRequired, checkText, checkInteger, checkNumber, checkDate]

const vendorRules = {
    vendorName:[0,1,1],
    phoneNumber:[],
    email:[],
    address:[],
    panNumber:[],
    gstNumber:[],
    ownerName:[],
    paymentDays:[],
}

const rawMaterialRules = {
    rawMaterialName:[],
    type:[],
    remarks:[],
    quantity:[],
    minimumQuantity:[]
}

const purchaseRules ={
    vendorName =[],
    rawMaterialName=[],
    billNumber=[],
    quantity=[],
    totalCost=[],
    amountPaid=[],
    damagedQuantity=[],
    date=[]
}

const productRules = {
    productName =[],
    type:[],
    remarks:[],
    quantity:[],
    minimumQuantity:[]
}

const customerRules = {
    customerName:[],
    phoneNumber:[],
    email:[],
    address:[],
    panNumber:[],
    gstNumber:[],
    ownerName:[],
    paymentDays:[],
}

const salesRules = {
    customerName:[],
    productName:[],
    date:[],
    quantity:[],
    billAmount:[],
    discountPercent:[],
    discountAmount:[],
    totalAmount:[],
    amountReceived:[]
}