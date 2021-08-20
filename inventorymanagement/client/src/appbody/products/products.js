import { Newentry, ProductDetail} from "./view";
import { Route, Switch } from "react-router-dom";
import { SubNavBar } from "../../sharedcomponents/subnavbar";

function Products(){
    let headerList = ["New Entry", "Product Detail", "Unsettled Debt"];

    return(
        <div className="NavContent-View">
            <div className='NavContent-Header'>
                <SubNavBar headerList={headerList} pathPrefix={"products"}/>
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
