import GetInventoryDetails from "../apicalls/fetchstore";
import {edits} from './edits';


async function GetItemList(){
    let itemList = await GetInventoryDetails('itemtable');

    edits.setItemList(itemList);

    return itemList;
}

export default GetItemList;

