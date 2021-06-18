import './App.css';
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <h1 className='AppName'>
        Inventory Management Application
      </h1>
      <div className='AppBody'>
        <nav className='NavBar'>
          <ol className='NavList'>
            <NavBar/>
          </ol>
        </nav>
        <div className='ListContent'>
          <input type='text' name='ItemName' placeholder='Item Name...' ></input>
          <input type='number' name='ItemQuantity' min='0' ></input>
          <button type='button'> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default App;
