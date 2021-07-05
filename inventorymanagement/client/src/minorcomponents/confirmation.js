function Confirmation(props){
    
    function clickHandler(event){
        return (event.target.value)
    }

    return(
        <section>
            <div>
                {String(props.text)}
            </div>
            <div onClick={clickHandler}>
                <button value={true}> Yes </button>
                <button value={false}> No </button>
            </div>
        </section>
    )
}