import './App.css';

function NavBar(){
    let NavList = ['STOCK', 'CUSTOMER', 'VENDOR'];
    
    return (NavList.map((items)=>{

        return (
            <li className='NavItems'>
                {items}
            </li>
        )
    }));
}

export default NavBar;