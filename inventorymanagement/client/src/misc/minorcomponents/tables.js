import './table.css';

// DrawTable expects "Table", "Editable", and "onClick" props. Editable and onClick are optional.

function DrawTable(props){

    if (props.Table === null){
        return null;
    }

    let header = Object.keys(props.Table[0]);

    function findIndex(index){
        return index;
    }

    return (
        <table className="table">
            <TableHeader header={header}/>
            <TableRow table={props.Table} findIndex={findIndex} editable={props.editable} onClick={props.onClick}/>
        </table>
    )
}


function TableHeader(props) {

    return (
        <tr className='tableHeaderRow'>
            {props.header.map((headerName) => {
                return <th className="tableHeaderData">{headerName.toUpperCase()}</th>
            })}
        </tr>
    )
}


function TableRow(props) {

    return (
        props.table.map((rowValue, index) => {
            
            return (
                <tr className="tableRow" >
                    <TableData rowValue={rowValue} editable={props.editable} onClick={props.onClick} index={index} table={props.table}/>
                </tr>
            )
        })
    )
    
}

function TableData(props){

    let values = Object.values(props.rowValue);

    if (props.editable){
        values.push(<button onClick={()=>{props.onClick(props.index)}}>Edit</button>)
    }

    return (    
        values.map((rowData) => {
            return <td className="tableData">{rowData}</td>
        })
    )

}


export default DrawTable;