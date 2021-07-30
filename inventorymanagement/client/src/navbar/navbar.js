import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(){
    let navList = ["Dashboard", "Purchase", "Sales", "Raw Material", "Vendor", "Customer", "Products"];

    return(
        <ol className="Navbar">
            {navList.map((item)=>{
                let endpoint = item.toLowerCase().replace(" ", "")
                if (endpoint==="dashboard"){
                    endpoint = ""
                }
                return(
                    <Link style={{textDecoration:"none", color:"black"}} to={`/${endpoint}`}>
                        <li>
                            {item}
                        </li>
                    </Link>
                    
                )
            })}
        </ol>
    )
}

export { Navbar }
