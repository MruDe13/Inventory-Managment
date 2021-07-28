import PostInventoryDetails from "../apicalls/makepostapi";

function onRowEdit(index, table, changeDialogStatus){
    console.log("onEdit at index " + index);
    const row = table[index];
    const editData = {...row};
    console.log(table);

    function onSave(){
        table[index] = editData;
        PostInventoryDetails('update/purchase', editData);
    }
    function onCancel(){
        console.log("Fuck off!");
    }

    changeDialogStatus({
        editData:editData,
        onSave: onSave,
        onCancel: onCancel
    });
}

export default onRowEdit;
