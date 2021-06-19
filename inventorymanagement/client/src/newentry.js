import './App.css';


function NewEntry() {

    let Items = ['Chair', 'Table', 'Desk'];
    return (
            <div className='NewEntry'>
                <div className='EntryBoxOne'>
                    <div className='EntryDetails'>
                        <div className="SelectList">
                            <select name="SelectList" >
                                <option value="Purchase">Purchase</option>
                                <option value="Sales">Sales</option>
                            </select>
                        </div>
                        <div className= 'CustomerDetails'>
                            <label> Customer/Vendor Name: </label>
                            <input placeholder='Enter Name..' type='text' maxLength='100'></input>
                        </div>
                        <div className= 'CustomerDetails'>
                            <label>Address : </label>
                            <input></input>
                        </div>
                        <div className= 'CustomerDetails'>
                            <label>Contact : </label>
                            <input placeholder='Phone No.'></input>
                        </div>   
                    </div>
                    <div>

                    </div>
                </div>
                <div className='EntryBoxTwo'>
                    <div className='EntryDetails'>
                        <div className='GoodsDetails'>
                            <label>Item Name : </label>
                            <select>
                                {Items.map((itemtype) => {
                                    return(
                                        <option>{itemtype}</option>
                                    )
                                })}
                                <option>Others</option>
                            </select>
                        </div>
                        <div className='GoodsDetails'>
                            <label>Quantity</label>
                            <input type='Number' placeholder='No. of Items'></input>
                        </div>
                        <div className='GoodsDetails'>
                            <label>Bill Amount: </label>
                            <input placeholder='Total Amount'></input>
                        </div>
                        <div className='GoodsDetails'>
                            <label>Amount Paid: </label>
                            <input placeholder='Amount Paid'></input>
                        </div>
                        <div className='GoodsDetails'>
                            <label>Date : </label>
                            <input type='Date'></input>
                        </div>
                        <div className='GoodsDetails'>
                            <button> Submit </button>
                        </div>

                    </div>
                </div>
            </div>
        
    )
}

export default NewEntry;