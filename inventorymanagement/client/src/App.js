import './App.css';
import NavBar from './view/navbar';
import StockDetails from './view/stock';
import Vendor from './view/vendor';
import { Switch, Route , Link} from 'react-router-dom';
import NewEntry from './view/EntryView/newentry';
import Modal from './minorcomponents/modal';
import {useState} from 'react';
import PurchaseDetails from './view/purchasedetail';


function App() {

  let [show, setShow] = useState(false);
  let [modalData, setModalData] = useState({});

  function changeDialogStatus(dialogData){
      console.log("Change dialog status" + JSON.stringify(dialogData));
      setModalData(dialogData);
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
              <Route path='/PURCHASE'>
                <PurchaseDetails changeDialogStatus={changeDialogStatus}/> 
              </Route>
              <Route path='/STOCK'>
                <StockDetails changeDialogStatus={changeDialogStatus}/>
              </Route>
              <Route path='/VENDOR'>
                <Vendor changeDialogStatus={changeDialogStatus}/>
              </Route>
            </Switch>
        </div>
          <Modal show={show} modalData={modalData} setShow={setShow} />
      </div>
    </div>
  );
}

export default App;
