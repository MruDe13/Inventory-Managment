import { useState } from "react";
import "../confirm/confirm.css";

let modalAlert = {};
let myLocal = {};

function ModalAlert(){
    let [modalText, setModalText] = useState("OK");
    let [display, setDisplay] = useState("ModalHide");

    async function alert(text){
        if(text){
            setModalText(text)
        }
        setDisplay("ModalShow");
        let response = new Promise((res,rej)=>{
            function handleClick(value){
                if(value === "OK"){
                    res(true);
                    setDisplay("ModalHide");
                }
            }
            myLocal["handleClick"] = handleClick;
        });

        return response;
    }

    modalAlert["alert"] = alert;

    return (
        <div className={display}>
            <div className="ModalBox">
                <div className="ModalText">
                    <strong>{modalText}</strong>
                </div>
                <div className="ModalButtons">
                    <button className="buttonYes" onClick={()=>{myLocal.handleClick("OK")}}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export {ModalAlert, modalAlert};
