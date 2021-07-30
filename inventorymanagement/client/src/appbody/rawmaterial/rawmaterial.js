import { Newentry, RawMaterialStock, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function RawMaterial(){
    let headerList = ["New Entry", "Stock Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/rawmaterial/">
                        <Newentry/>
                    </Route>
                    <Route path="/rawmaterial/stockdetail">
                        <RawMaterialStock/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { RawMaterial }
