import '../../../App.css';
import {Link} from 'react-router-dom';
import { edits } from '../../../store/edits';
import { VendorDetails, PurchaseDetail, StockDetails } from '../../../store';
import { icons } from '../../../resources';
import { BodyContext } from '../appbody';
import { useContext } from 'react';

function NavBar(){
    let NavList = ['NEW ENTRY','PURCHASE', 'STOCK', 'VENDOR'];
    let {active, changeNavBarActiveStatus} = useContext(BodyContext);
    
    function clickHandler(items){
        let active = {
            'NEW ENTRY':false,
            'PURCHASE': false,
            'STOCK':false,
            'VENDOR':false};

        active[items] = true;
        changeNavBarActiveStatus(active)
    }

    return (
        <div >
            {NavList.map((items)=>{
                return (
                    <Link to={items === 'NEW ENTRY'? '/':items}  style={{textDecoration:'none', color: 'black'}}>
                        <li className={`NavItems ${active[items] ? 'activeBG': 'inactiveBG'}`}
                        value={items}
                        onClick={()=>{clickHandler(items)}}
                        key={items}>  
                        <span className="NavItem-Text"> <img className="NavItem-Icon" src={icons[items]}/><strong>{items}</strong></span>
                        </li>
                    </Link>  
                )
            })}
        </div>    
    )
}

export default NavBar;

