import './App.css';
import { Appbody } from './appbody';
import { AppHeader } from './appheader/appheader';
import { Navbar } from './navbar/navbar';
import { ModalConfirm, ModalAlert } from './modals';


function App() {

  return (
    <div className="App">
      <div className="AppName">
        <AppHeader/>
      </div>
      <div className="AppBody">    
        <Navbar/>
        <Appbody/>
      </div>
      <ModalConfirm/>
      <ModalAlert/>
    </div>
  );
}

export default App;
