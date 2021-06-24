let path ='vendor';
let data = {
    name: "Bahut BadKa Aadmi",
    age : "Bahut Badka Umar"
}

async function PostInventoryDetails(){
    console.log(' Post Inventory Details Called.')
    let response = await fetch(`http://localhost:3001/${path}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    let dataResponse = response.json();

    return dataResponse;
}

export default PostInventoryDetails;





