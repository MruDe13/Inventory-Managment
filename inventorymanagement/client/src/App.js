import './App.css';
import NavBar from './navbar';
import Customer from './customer';
import Vendor from './vendor';
import Stock from './stock';
import { Switch, Route , Link} from 'react-router-dom';
import NewEntry from './newentry';



function App() {
  return (
    <div className="App">
      <h1 className='AppName'>
        Inventory Management Application
      </h1>
      <div className='AppBody'>
        <nav className='NavBar'>
          <ol className='NavList'>
            <li className='NavItems'>
                <Link exact to='/'  style={{textDecoration:'none', color: 'black'}}>
                  New Entry
                </Link>  
            </li>
            <NavBar/>
          </ol>
        </nav>
        <div className='ListContent'>
            <Switch>
              <Route exact path='/'>
                <NewEntry/>
              </Route>
              <Route path='/STOCK'>
                <Stock/> 
              </Route>
              <Route path='/CUSTOMER'>
                <Customer/>
              </Route>
              <Route path='/VENDOR'>
                <Vendor/>
              </Route>
            </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
