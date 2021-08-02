import { Newentry, SalesTransactions, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Sales(){
    let headerList = ["New Entry", "Sales Transactions", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/sales/">
                        <Newentry/>
                    </Route>
                    <Route path="/sales/salestransactions">
                        <SalesTransactions/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Sales }