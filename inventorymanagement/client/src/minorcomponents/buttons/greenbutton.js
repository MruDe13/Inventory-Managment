import '../../App.css';


function GreenButton(props){
    return (
        <button onClick={props.clickHandler} className='btn-green'>
            Confirm
        </button>
    )
}

export default GreenButton;

