async function InventoryDetails (path){
    let response = await fetch (`http://localhost:3001/${path}`);

    let data = await response.json();

    return data;
}


export default InventoryDetails;