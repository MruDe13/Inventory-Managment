import { Newentry, PurchaseDetail} from "./view";
import { Route, Switch } from "react-router-dom";
import { SubNavBar } from "../../sharedcomponents/subnavbar";

function Purchase(){
    let headerList = ["New Entry", "Purchase Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <SubNavBar headerList={headerList} pathPrefix={"purchase"}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/purchase/">
                        <Newentry/>
                    </Route>
                    <Route path="/purchase/purchasedetail">
                        <PurchaseDetail/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Purchase }
