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
        let changeactive = {
            'NEW ENTRY':false,
            'PURCHASE': false,
            'STOCK':false,
            'VENDOR':false};

        changeactive[items] = true;
        changeNavBarActiveStatus(changeactive)
        edits.currentState = items;
        if(edits.currentState === 'NEW ENTRY'){
        }
        if (edits.currentState ==='VENDOR'){
            VendorDetails();
        }
        if (edits.currentState ==='PURCHASE'){
            PurchaseDetail()
        }
        if (edits.currentState === 'STOCK'){
            StockDetails()
        }
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
                            <img src={icons[items]}/>
                            <strong>{items}</strong>
                        </li>
                    </Link>  
                )
            })}
        </div>    
    )
}

export default NavBar;

