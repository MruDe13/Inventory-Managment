import '../App.css';
import updateStore from '../apicalls/updatestore';
import { edits } from '../store/edits';
import { currentStore } from '../apicalls/currentstate';

function Modal(props){
    
    console.log('Model Re-Rendered ' + props.index);
    const modalDisplay = props.show ? 'ModalShow' : 'ModalHide' ;

    if (currentStore() === null){
        return <div></div>
    }

    let store = currentStore();
    let editRow = store[props.index];

    if(props.index == -1){
        return null;
    }

    function clickHandler(){
        updateStore(props.index, edits.newValue);
        props.closeDialog();
    }

    return (
            <div className= {modalDisplay}>
                <div className='ModalContent'>
                    <EditTable editRow={editRow}/>
                    <button onClick={props.closeDialog} className='btn-red'> Cancel </button>
                    <button onClick={clickHandler} className='btn-green'> Save </button>
                </div>
            </div>
            
    )
}

function EditTable(props){

    let itemName = Object.keys(props.editRow);
    return(
        <form className='ModalTable'>
            <table>
                <tr>
                    <th> Items </th>
                    <th> New Value </th>
                </tr>
                <EditTableItems itemName={itemName} editRow={props.editRow}/>
            </table>
        </form>
    )
}

function EditTableItems(props){

    var copyValue = {...props.editRow}

    return (
        props.itemName.map((item)=>{
            let itemValue = props.editRow[item];

            function changeHandler(event){
                var id = event.target.id;
                var changedValue = event.target.value;
                copyValue[id] = changedValue;
                edits.newValue = copyValue;
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