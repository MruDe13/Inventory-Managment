import '../App.css';


function DrawTable(props){

    let header = Object.keys(props.Table[0]);

    return (
        <table>
            <TableHeader header={header}/>
            <TableRow table={props.Table}/>
        </table>
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
        props.table.map((rowValue) => {
            return (
                <tr>
                    <TableData rowValue={rowValue}/>
                </tr>
            )
        })
    )
    
}

function TableData(props){

    let values = Object.values(props.rowValue);

    return (
        
        values.map((rowData) => {
            return <td>{rowData}</td>
        })
    )

}




export default DrawTable;