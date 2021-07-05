import '../App.css';
import {Link} from 'react-router-dom';
import { edits } from '../store/edits';
import VendorList from '../store/vendorlist';
import PurchaseDetail from '../store/purchasedetail';

function NavBar(){
    let NavList = ['PURCHASE', 'CUSTOMER', 'VENDOR'];
    
    function clickHandler(){
        if (edits.currentState==='VENDOR'){
            VendorList();
        }
        if (edits.currentState==='PURCHASE'){
            PurchaseDetail()
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