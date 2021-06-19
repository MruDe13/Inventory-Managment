import './App.css';
import {Link} from 'react-router-dom';

function NavBar(){
    let NavList = ['STOCK', 'CUSTOMER', 'VENDOR'];
    
    return (NavList.map((items)=>{

        return (
            <li className='NavItems'>
                <Link to={items}  style={{textDecoration:'none', color: 'black'}}>
                {items}
                </Link>  
            </li>
        )
    }));
}

export default NavBar;