import { Newentry, ProductionDetail, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Production(){
    let headerList = ["New Entry", "Production Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
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
