import '../App.css';
import {Link} from 'react-router-dom';
import { edits } from '../store/edits';
import VendorDetails from '../store/vendorldetails';
import PurchaseDetail from '../store/purchasedetail';
import StockDetails from '../store/stockdetails';

function NavBar(){
    let NavList = ['PURCHASE', 'STOCK', 'VENDOR'];
    
    function clickHandler(){
        if (edits.currentState==='VENDOR'){
            VendorDetails();
        }
        if (edits.currentState==='PURCHASE'){
            PurchaseDetail()
        }
        if (edits.currentState === 'STOCK'){
            StockDetails()
        }
    }
    
    return (NavList.map((items)=>{

        return (
            
                <Link to={items}  style={{textDecoration:'none', color: 'black'}}>
                    <li className='NavItems' 
                    onClick={()=>{edits.currentState = items;
                    clickHandler()}}>
                    {items}
                    </li>
                </Link>  
            
        )
    }));
}

export default NavBar;