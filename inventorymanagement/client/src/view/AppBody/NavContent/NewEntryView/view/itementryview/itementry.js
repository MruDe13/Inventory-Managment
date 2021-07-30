import { useState } from 'react';
import { Item } from '../../../../../../apicalls/modelclass';
import PostInventoryDetails from '../../../../../../apicalls/makepostapi';
import LoadingIndicator from '../../../../../../minorcomponents/loadingIndicator';
import { TextBox , Button} from '../../../../../../sharedcomponents/textbox';

function ItemEntry(){
    let [formView, setFormView] = useState(new Item());
    let [loading, setLoading] = useState(false);


    let keys = Object.keys(formView);
    console.log(keys);

    function changeHandler(event){
        let id = event.target.id;
        console.log(id);
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
    let tempDisplay = !isLoading() ? 'NewEntryBox' : 'hide';


    return(
        <div>
            <div className={tempDisplay} onChange={changeHandler}>    
                    <div className="NewEntryBoxField">
                        <TextBox type="text" label="Item Name*" id="name"/>
                        <TextBox type="text" label="Remarks" id="remarks"/>
                    </div>
                    <div className="button-Submit">
                        <Button buttonText="Submit" onClick={clickHandler}/>
                    </div>     
            </div>
            <LoadingIndicator isLoading={isLoading}/>
        </div>
    )
}

export default ItemEntry;