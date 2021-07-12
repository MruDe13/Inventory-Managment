import '../../App.css';


function RedButton(props){
    return(
        <button onClick={props.closeDialog} className='btn-red'> 
            Cancel 
        </button>
    )
}

export default RedButton;

