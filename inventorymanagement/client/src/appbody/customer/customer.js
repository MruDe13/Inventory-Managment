import { Newentry, CustomerList, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Customer(){
    let headerList = ["New Entry", "Customer List", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/customer/">
                        <Newentry/>
                    </Route>
                    <Route path="/customer/customerlist">
                        <CustomerList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Customer }
