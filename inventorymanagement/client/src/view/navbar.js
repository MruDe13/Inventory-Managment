import '../App.css';
import {Link} from 'react-router-dom';
import { edits } from '../store/edits';
import PurchaseBook from '../store/purchaselist';

function NavBar(){
    let NavList = ['STOCK', 'CUSTOMER', 'VENDOR'];
    
    return (NavList.map((items)=>{

        return (
            
                <Link to={items}  style={{textDecoration:'none', color: 'black'}}>
                    <li className='NavItems' onClick={()=>{edits.currentState = items;}}>
                    {items}
                    </li>
                </Link>  
            
        )
    }));
}

export default NavBar;