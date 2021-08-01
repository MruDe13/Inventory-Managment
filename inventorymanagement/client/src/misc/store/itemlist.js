import GetInventoryDetails from "../apicalls/makegetapi";
import { store } from "../store/context"

async function GetItemList(){
    let response = new Promise((res,rej)=>{
        GetInventoryDetails('itemtable')
            .then((data)=>{res(data);
                if (store["itemList"].length === 0){
                    data.map((item)=>{
                        store["itemList"].push(item.name)
                        })
                }  
            })
            .catch((err)=> {rej(err)})
    })

    return response;
}

export default GetItemList;

