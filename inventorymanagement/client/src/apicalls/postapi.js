async function PostInventoryDetails(path, data){
    console.log(' Post Inventory Details Called.')
    let response = await fetch(`http://localhost:3001/${path}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    let dataResponse = await response.json();

    console.log(dataResponse)
    alert(dataResponse["Response"]);
    
    return dataResponse;
}

export default PostInventoryDetails;

