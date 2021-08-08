import "./shared.css";

// TextBox expects "type", "id", "label", "placeholder" as props
function TextBox(props){
    return (
        <div className="textbox" key={`${props.defaultValue?props.defaultValue:""}`}>
            <input ref={props.setref} type={`${props.type}`} autoComplete="off" id={`${props.id}`} className="textbox-input" placeholder={`${props.placeholder?props.placeholder:""}`} defaultValue={`${props.defaultValue?props.defaultValue:""}`}/>
            <label for={`${props.label}`} className="textbox-label" > {props.label} </label>
        </div>
    )
}

function DisabledTextBox(props){
    return (
        <div className="textbox" key={`${props.value?props.value:""}`}>
            <input type={`${props.type}`} autoComplete="off" id={`${props.id}`} className="textbox-input" placeholder={`${props.placeholder?props.placeholder:""}`} value={`${props.value?props.value:""}`} disabled/>
            <label for={`${props.label}`} className="textbox-label" > {props.label} </label>
        </div>
    )
}


function SelectBox(props){
    return(
        <div className="selectbox">
            <span className="selectbox-text">{props.label}:
                <select className="selectbox-select" onChange={props.onChange} id={props.id}>
                {props.list?.map((item)=>{
                    return(
                        <option value={item} >{item}</option>
                    )
                })}
                </select>
            </span>    
        </div>
    )
}

function Button(props){
    return(
        <button onClick={props.onClick} className="primary-button" value={props.value}>
            {props.buttonText}
        </button>
    )
}

export { TextBox , DisabledTextBox, SelectBox, Button}
