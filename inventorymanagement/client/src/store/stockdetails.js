import GetInventoryDetails from "../apicalls/fetchstore";
import {edits} from './edits';

async function  StockDetails(){
    let stockDetails = await GetInventoryDetails('stocktable');

    console.log(stockDetails);

    edits.setStockList(stockDetails);

    return stockDetails;
}

export default  StockDetails;
