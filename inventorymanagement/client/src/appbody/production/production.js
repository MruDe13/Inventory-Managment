import { Newentry, ProductionDetail} from "./view";
import { Route, Switch } from "react-router-dom";
import { SubNavBar } from "../../sharedcomponents/subnavbar";

function Production(){
    let headerList = ["New Entry", "Production Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <SubNavBar headerList={headerList} pathPrefix={"production"}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/production/">
                        <Newentry/>
                    </Route>
                    <Route path="/production/productiondetail">
                        <ProductionDetail/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Production }
