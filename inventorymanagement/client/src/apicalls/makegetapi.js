async function MakeGetAPI (path){

    let response = new Promise((res,rej)=>{
        fetch(`http://localhost:3001/${path}`)
            .then(data => data.json())
            .then((json)=>{ res(json)})
            .catch((err)=>{ rej(err); })
    })

    return response;
}

export default MakeGetAPI;

