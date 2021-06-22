import StockDetails from "./stockdetails";

function Stock(props){

    return (
        <div className='StockBook'>
            <div className='SortDetails'>
            </div>
            <div className='SortResult'>
                <StockDetails editable={true} changeDialogStatus={props.changeDialogStatus}/>
            </div>
        </div>
    )
}

export default Stock;