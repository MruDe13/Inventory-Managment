import './table.css';
import RedButton from './buttons/redbutton';
import GreenButton from './buttons/greenbutton';
import { BodyContext } from '../view/AppBody/appbody';
import { useContext } from 'react';

function Modal(props){
    
    console.log('Model Re-Rendered ' + props.editRowValue);
    let {modalData, show, setShow} = useContext(BodyContext);

    const modalDisplay = show ? 'ModalShow' : 'ModalHide' ;
    const data = modalData.editData;
    const onCancel = modalData.onCancel;
    const onSave = modalData.onSave;
    
    function onSaveClick(){
        setShow(false);
        onSave();
    }

    function onCancelClick(){
        setShow(false);
        onCancel();
    }

    if(!data){
        console.log("Returning null from modal");
        return null;
    }

    return (
            <div className= {modalDisplay}>
                <div className='ModalContent'>  
                    <EditTable editRowValue={data}/>
                    <div>
                        <GreenButton clickHandler={onSaveClick}/>
                        <RedButton closeDialog={onCancelClick}/>
                    </div>
                </div>
            </div>
            
    )
}

function EditTable(props){

    let itemName = Object.keys(props.editRowValue);
    return(
            <table className='ModalTable'>
                <tr className='tableHeader'>
                    <th> Items </th>
                    <th> New Value </th>
                </tr>
                <EditTableItems itemName={itemName} editRow={props.editRowValue}/>
            </table>
    )
}

function EditTableItems(props){

    return (
        props.itemName.map((item)=>{
            
            let itemValue = props.editRow[item];

            function changeHandler(event){
                var id = event.target.id;
                var changedValue = event.target.value;
                props.editRow[id] = changedValue;
            }

            return(
                <tr>
                    <td>{item.toUpperCase()}</td>
                    <td key={itemValue} ><input defaultValue={itemValue} id={item} onChange={changeHandler} type={typeof item}/></td>
                </tr>
            )
        })
    )
}


export default Modal;