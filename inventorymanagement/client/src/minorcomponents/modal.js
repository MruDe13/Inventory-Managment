import '../App.css';
import updateStore from '../apicalls/updatestore';
import { edits } from '../store/edits';
import { currentStore } from '../apicalls/currentstate';
import RedButton from './buttons/redbutton';
import GreenButton from './buttons/greenbutton';
import ConfirmationBox from './confirmation';

function Modal(props){
    
    console.log('Model Re-Rendered ' + props.editRowValue);

    const modalDisplay = props.show ? 'ModalShow' : 'ModalHide' ;
    const data = props.modalData.editData;
    const onCancel = props.modalData.onCancel;
    const onSave = props.modalData.onSave;
    const setShow = props.setShow;
    
    function onSaveClick(){
        setShow(false);
        onSave();
    }

    function onCancelClick(){
        setShow(false);
        onCancel();
    }

    if(!data){
        return null;
    }

    return (
            <div className= {modalDisplay}>
                <div className='ModalContent'>
                    <div>
                        <EditTable editRowValue={data}/>
                    </div>
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
        <section className='ModalTable'>
            <table>
                <tr>
                    <th> Items </th>
                    <th> New Value </th>
                </tr>
                <EditTableItems itemName={itemName} editRow={props.editRowValue}/>
            </table>
        </section>
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