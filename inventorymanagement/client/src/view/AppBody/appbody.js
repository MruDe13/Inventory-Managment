import NavBar from "./Navbar/navbar";
import { NavContent } from "./NavContent/navcontent";
import Modal from "../../minorcomponents/modal";
import '../../App.css';
import { useState, createContext } from "react";

let BodyContext = createContext({});

function AppBody(){
    let [show, setShow] = useState(false);
    let [modalData, setModalData] = useState({});
    
    let activeState = {
      'NEW ENTRY':true,
      'PURCHASE': false,
      'STOCK':false,
      'VENDOR':false};
    let [active, setActive]= useState(activeState);
  
    function changeDialogStatus(dialogData){
        console.log("Change dialog status" + JSON.stringify(dialogData));
        setModalData(dialogData);
        setShow(true);
    }
  
    function changeNavBarActiveStatus(changeActive){
      console.log(changeActive)
      setActive(changeActive);
    }
    return (
        <BodyContext.Provider value={{active,changeNavBarActiveStatus,show,setShow,modalData, changeDialogStatus}}>
            <div className='AppBody'>
                <ol className='NavBar NavList'>          
                    <NavBar/>
                </ol>
                <NavContent/>
                <Modal show={show} modalData={modalData} setShow={setShow} />
            </div>
        </BodyContext.Provider>
    )
}

export { AppBody , BodyContext}
