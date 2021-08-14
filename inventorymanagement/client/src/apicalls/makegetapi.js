const globalConfig = require('../config');

async function MakeGetAPI (path){
    let host = globalConfig.SERVER_HOST;
    let port = globalConfig.SERVER_PORT;
    let response = new Promise((res,rej)=>{
        fetch(`http://${host}:${port}/${path}`)
            .then(data => data.json())
            .then((json)=>{ res(json)})
            .catch((err)=>{ rej(err); })
    })

    return response;
}

export default MakeGetAPI;

