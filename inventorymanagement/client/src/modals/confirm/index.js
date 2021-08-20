import { useState } from "react";
import "./confirm.css";

let modalConfirm = {};
let myLocal = {};

function ModalConfirm(){
    let [modalText, setModalText] = useState("Do you want to continue?");
    let [display, setDisplay] = useState("ModalHide");

    async function confirm(text){
        if(text){
            setModalText(text)
        }
        setDisplay("ModalShow");
        let response = new Promise((res,rej)=>{
            function handleClick(value){
                if(value === "Yes"){
                    res(true);
                    setDisplay("ModalHide");
                }
                if(value === "No"){
                    res(false);
                    setDisplay("ModalHide");
                }
            }
            myLocal["handleClick"] = handleClick;
        });

        return response;
    }

    modalConfirm["confirm"] = confirm;

    return (
        <div className={display}>
            <div className="ModalBox">
                <div className="ModalText">
                    <strong>{modalText}</strong>
                </div>
                <div className="ModalButtons">
                    <button className="buttonYes" onClick={()=>{myLocal.handleClick("Yes")}}>Yes</button>
                    <button className="buttonNo" onClick={()=>{myLocal.handleClick("No")}}>No</button>
                </div>
            </div>
        </div>
    )
}

export {ModalConfirm, modalConfirm};
