import "./shared.css";

function TextBox(props){
    return (
        <div className="textbox">
            <input type={`${props.type}`} autoComplete="off" id={`${props.id}`} className="textbox-input" placeholder=""/>
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
        <button onClick={props.onClick} className="primary-button">
            {props.buttonText}
        </button>
    )
}

export { TextBox , SelectBox, Button}
