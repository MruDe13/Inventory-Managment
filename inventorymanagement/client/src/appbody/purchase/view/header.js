import { Link } from "react-router-dom";
import "./purchase.css";

function Header(props){
    let headerList = props.headerList;

    return(
        <ul className="Content-Header">
            {headerList.map((item)=>{
                let endpoint = item.toLowerCase().replace(" ", "")
                if (endpoint === 'newentry'){
                    endpoint = ""
                }
                return(
                    <Link to={`/purchase/${endpoint}`} className="Content-Header-Item">
                        <li>
                            {item}
                        </li>
                    </Link>
                )
            })}
        </ul>
    )
}

export { Header }
