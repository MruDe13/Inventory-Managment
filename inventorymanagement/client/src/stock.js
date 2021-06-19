import StockDetails from "./stockdetails";

function Stock(){

    return (
        <div className='StockBook'>
            <div className='SortDetails'>

            </div>
            <div className='SortResult'>
                <StockDetails/>
            </div>
        </div>
    )
}

export default Stock;