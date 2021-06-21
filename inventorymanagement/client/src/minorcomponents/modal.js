import '../App.css';
import updateStore from '../apicalls/updatestore';
import { edits } from '../store/edits';

function Modal(props){
    
    console.log('Model Re-Rendered ' + props.index);
    const modalDisplay = props.show ? 'ModalShow' : 'ModalHide' ;
    let editRow = props.store[props.index];

    if(props.index == -1){
        return null;
    }

    function clickHandler(){
        updateStore(props.index, props.store, edits.newValue);
        props.closeDialog();
    }

    return (
        <div>
            <div className= {modalDisplay}>
                    <EditTable editRow={editRow}/>
                <div>
                    <button onClick={props.closeDialog}> Cancel </button>
                    <button onClick={clickHandler}> Save </button>
                </div>
            </div>
            
        </div>
    )
}

function EditTable(props){

    let itemName = Object.keys(props.editRow);
    return(
        <form>
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
                    <td key={itemValue} ><input defaultValue={itemValue} id={item} onChange={changeHandler}/></td>
                </tr>
            )
        })
    )
}


export default Modal;