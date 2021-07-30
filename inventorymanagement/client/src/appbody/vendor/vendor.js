import { Newentry, VendorList, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Vendor(){
    let headerList = ["New Entry", "Vendor List", "Unsettled Debt"];

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
                    <Route path="/vendor/vendorlist">
                        <VendorList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Vendor }
