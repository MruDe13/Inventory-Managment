import { Newentry, CustomerDetail} from "./view";
import { Route, Switch } from "react-router-dom";
import { SubNavBar } from "../../sharedcomponents/subnavbar";

function Customer(){
    let headerList = ["New Entry", "Customer Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <SubNavBar headerList={headerList} pathPrefix={"customer"}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/customer/">
                        <Newentry/>
                    </Route>
                    <Route path="/customer/customerdetail">
                        <CustomerDetail/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Customer }
