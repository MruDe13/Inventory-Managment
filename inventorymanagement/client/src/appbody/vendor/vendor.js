import { Newentry, VendorDetail} from "./view";
import { Route, Switch } from "react-router-dom";
import { SubNavBar } from "../../sharedcomponents/subnavbar";

function Vendor(){
    let headerList = ["New Entry", "Vendor Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <SubNavBar headerList={headerList} pathPrefix={"vendor"}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/vendor/">
                        <Newentry/>
                    </Route>
                    <Route path="/vendor/vendordetail">
                        <VendorDetail/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Vendor }
