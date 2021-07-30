import { Switch, Route } from 'react-router-dom';
import NewEntry from "./NewEntryView/newentry";
import PurchaseDetails from "./RecordsView/purchasedetail";
import StockDetails from "./RecordsView/stock";
import Vendor from "./RecordsView/vendor";


function NavContent(){
    return (
        <div className='ListContent'>
            <Switch>
              <Route exact path='/'>
                <NewEntry/>
              </Route>
              <Route path='/PURCHASE'>
                <PurchaseDetails/> 
              </Route>
              <Route path='/STOCK'>
                <StockDetails />
              </Route>
              <Route path='/VENDOR'>
                <Vendor />
              </Route>
            </Switch>
        </div>
    )
}

export { NavContent }

