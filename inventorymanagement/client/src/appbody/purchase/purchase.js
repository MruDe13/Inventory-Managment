import { Newentry, PurchaseList, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Purchase(){
    let headerList = ["New Entry", "Purchase List", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/purchase/">
                        <Newentry/>
                    </Route>
                    <Route path="/purchase/purchaselist">
                        <PurchaseList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Purchase }
