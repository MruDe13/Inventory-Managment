import { Link } from "react-router-dom";
import "./navbar.css";
import {icons} from "../resources/index"

function Navbar(){
    let navList = ["Dashboard", "Purchase", "Sales", "Raw Material", "Vendor", "Customer", "Products"];

    return(
        <ol className="Navbar">
            {navList.map((item)=>{
                let endpoint = item.toLowerCase().replace(" ", "")
                let iconSrc = icons[endpoint]
                if (endpoint==="dashboard"){
                    endpoint = ""
                }
                
                return(
                    <Link style={{textDecoration:"none", color:"black"}} to={`/${endpoint}`}>
                        <li>
                            <div className="NavbarIcons"><img src={iconSrc} /></div>
                            {item}
                        </li>
                    </Link>
                    
                )
            })}
        </ol>
    )
}

export { Navbar }
