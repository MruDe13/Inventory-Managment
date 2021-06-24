import './App.css';
import NavBar from './view/navbar';
import Customer from './view/customer';
import Vendor from './view/vendor';
import Stock from './view/stock';
import { Switch, Route , Link} from 'react-router-dom';
import NewEntry from './view/newentry';
import Modal from './minorcomponents/modal';
import {useState} from 'react'; 


function App() {

  let [show, setShow] = useState(false);
  let [index, setIndex] = useState(-1);

  function changeDialogStatus(indexValue){
      console.log("Change dialog status" + indexValue);
      setIndex(indexValue);
      setShow(true);
  }

  function closeDialog(){
      setShow(false)
  }


  return (
    <div className="App">
      <h1 className='AppName'>
        Inventory Management Application
      </h1>
      <div className='AppBody'>
        <nav className='NavBar'>
          <ol className='NavList'>
            
                <Link exact to='/'  style={{textDecoration:'none', color: 'black'}}>
                  <li className='NavItems'>
                  New Entry
                  </li>
                </Link>            
              <NavBar/>
          </ol>
        </nav>
        <div className='ListContent'>
            <Switch>
              <Route exact path='/'>
                <NewEntry/>
              </Route>
              <Route path='/STOCK'>
                <Stock changeDialogStatus={changeDialogStatus}/> 
              </Route>
              <Route path='/CUSTOMER'>
                <Customer changeDialogStatus={changeDialogStatus}/>
              </Route>
              <Route path='/VENDOR'>
                <Vendor changeDialogStatus={changeDialogStatus}/>
              </Route>
            </Switch>
        </div>
          <Modal show={show} index={index} closeDialog={closeDialog} />
      </div>
    </div>
  );
}

export default App;
