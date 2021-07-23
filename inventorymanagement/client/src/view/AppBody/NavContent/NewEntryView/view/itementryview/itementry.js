import { useState } from 'react';
import { Item } from '../../../../../../apicalls/modelclass';
import PostInventoryDetails from '../../../../../../apicalls/postapi';
import LoadingIndicator from '../../../../../../minorcomponents/loadingIndicator';

function ItemEntry(){
    let [formView, setFormView] = useState(new Item());
    let [loading, setLoading] = useState(false);


    let keys = Object.keys(formView);
    console.log(keys);

    function changeHandler(event){
        let id = event.target.id;
        let i;
        for (i in keys){
            if (keys[i] === id){
                formView[id] = event.target.value;
            }
        }
        console.log(formView);
    }

    function clickHandler(){
        console.log(formView);
        setLoading(true);
        let confirmation = window.confirm('Do you want to proceed?');

        if(confirmation){
            PostInventoryDetails('itemtable', formView).then(()=>{
                setLoading(false);
            }).catch(()=>{
                setLoading(false);
            });
        } else {
            alert("Operation Canceled!");
            setLoading(false);
        }
        
    }

    function isLoading(){
        return loading;
    }
    let tempDisplay = !isLoading() ? 'EntryBox' : 'hide';


    return(
        <div>
            <div className={tempDisplay}>    
                <section onChange={changeHandler}>
                    <div>
                        <label>Item Name: </label>
                        <input id='name'/>

                        <label>Remarks</label>
                        <input id='remarks'/>
                    </div>
                </section>
                <section>
                    <div>
                        <button onClick={clickHandler}> Submit </button>
                    </div>
                </section>
            </div>
            <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export default ItemEntry;