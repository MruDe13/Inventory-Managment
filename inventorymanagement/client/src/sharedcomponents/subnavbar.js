import { Link } from "react-router-dom";
import { useState } from "react";

function SubNavBar(props){
    let headerList = props.headerList;
    let [activeNav, setActiveNav] = useState(0)

    return(
        <ul className="Content-Header">
            {headerList.map((item, index)=>{
                let endpoint = item.toLowerCase().replace(" ", "")
                if (endpoint === 'newentry'){
                    endpoint = ""
                }
                return(
                    <Link 
                    to={`/${props.pathPrefix}/${endpoint}`} 
                    className={`Content-Header-Item ${index===activeNav? "Active":""}`}
                    onClick={()=>{setActiveNav(index)}}
                    >
                        <li>
                            {item}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export { SubNavBar }
