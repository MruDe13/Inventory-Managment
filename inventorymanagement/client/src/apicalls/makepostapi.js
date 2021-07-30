async function MakePostAPI(path, data){
    console.log(' Post Inventory Details Called.')

    let response = new Promise((res,rej)=>{
        fetch(`http://localhost:3001/${path}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
        })
            .then(data => data.json())
            .then((json)=>{ res(json); alert(json["Response"])})
            .catch((err)=>{ rej(err)})
    });
    
    return response;
}

export default MakePostAPI;

