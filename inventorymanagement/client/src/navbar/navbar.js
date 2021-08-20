import { Link } from "react-router-dom";
import "./navbar.css";
import {icons} from "../resources/index";
import { useState } from "react";

function Navbar(){
    let navList = ["Dashboard", "Purchase", "Production", "Sales", "Raw Material", "Vendor", "Customer", "Products"];
    let [activeNav, setActiveNav] = useState(0);
    return(
        <ol className="Navbar">
            {navList.map((item, index)=>{
                let endpoint = item.toLowerCase().replace(" ", "")
                let iconSrc = icons[endpoint]
                if (endpoint==="dashboard"){
                    endpoint = ""
                }
                
                return(
                    <Link 
                    style={{textDecoration:"none", color:"black"}} 
                    to={`/${endpoint}`} 
                    onClick={()=>{setActiveNav(index)}}
                    className={`${index===activeNav? "Active": ""}`}
                    >
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
