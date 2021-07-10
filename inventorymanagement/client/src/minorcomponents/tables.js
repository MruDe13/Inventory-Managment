import '../App.css';
import Modal from './modal';
import {useState} from 'react';


function DrawTable(props){

    if (props.Table === null || undefined){
        return null;
    }

    let header = Object.keys(props.Table[0]);

    function findIndex(index){
        return index;
    }



    return (
        <div>
            <table>
            <TableHeader header={header}/>
            <TableRow table={props.Table} findIndex={findIndex} editable={props.editable} changeDialogStatus={props.changeDialogStatus}/>
            </table>
        </div>
    )
}


function TableHeader(props) {

    return (
        <tr>
            {props.header.map((headerName) => {
                return <th>{headerName.toUpperCase()}</th>
            })}
        </tr>
    )
}


function TableRow(props) {

    return (
        props.table.map((rowValue, index) => {
            
            return (
                <tr >
                    <TableData rowValue={rowValue} editable={props.editable} changeDialogStatus={props.changeDialogStatus} index={index} table={props.table}/>
                </tr>
            )
        })
    )
    
}

function TableData(props){

    function clickHandler(index){
        props.changeDialogStatus(index);
    }
    let values = Object.values(props.rowValue);

    if (props.editable){
        values.push(<button onClick={()=>{clickHandler(props.index)}}>Edit</button>)
    }

    return (    
        values.map((rowData) => {
            return <td >{rowData}</td>
        })
    )

}


export default DrawTable;