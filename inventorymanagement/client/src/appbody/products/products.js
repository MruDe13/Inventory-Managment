import { Newentry, ProductList, Header} from "./view";
import { Route, Switch } from "react-router-dom";

function Products(){
    let headerList = ["New Entry", "Product List", "Unsettled Debt"];

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
                    <Route path="/products/productlist">
                        <ProductList/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export { Products }
