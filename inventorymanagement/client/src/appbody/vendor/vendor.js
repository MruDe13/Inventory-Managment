import { Newentry, VendorDetail, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Vendor(){
    let headerList = ["New Entry", "Vendor Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
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
