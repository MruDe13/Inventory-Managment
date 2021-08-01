import { Customer } from "./customer/customer";
import { Dashboard } from "./dashboard/dashboard";
import { Products } from "./products/products";
import { Purchase } from "./purchase/purchase";
import { RawMaterial } from "./rawmaterial/rawmaterial";
import { Sales } from "./sales/sales";
import { Vendor } from "./vendor/vendor";
import {Route, Switch} from 'react-router-dom'

function Appbody(){
 return (
     <div className="NavContent">
         <Switch>
             <Route exact path="/">
                <Dashboard/>
             </Route>
             <Route path="/purchase">
                 <Purchase/>
             </Route>
             <Route path="/sales">
                 <Sales/>
             </Route>
             <Route path="/rawmaterial">
                 <RawMaterial/>
             </Route>
             <Route path="/products">
                 <Products/>
             </Route>
             <Route path="/vendor">
                 <Vendor/>
             </Route>
             <Route path="/customer">
                 <Customer/>
             </Route>
         </Switch>
     </div>
 )
}

export { Appbody }