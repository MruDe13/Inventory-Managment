import { Newentry, ProductDetail, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Products(){
    let headerList = ["New Entry", "Product Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <Header headerList={headerList}/>
            </div>
            <div className='NavContent-Body'>
                <Switch>
                    <Route exact path="/products/">
                        <Newentry/>
                    </Route>
                    <Route path="/products/productdetail">
                        <ProductDetail/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Products }
