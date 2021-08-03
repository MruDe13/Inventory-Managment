import './loadingIndicator.css'

function IndicatorView(){
    return(
            <div className="loader">
                <p>l</p>
                <p>o</p>
                <p>a</p>
                <p>d</p>
                <p>i</p>
                <p>n</p>
                <p>g</p>
            </div>     
    )
}

export default function LoadingIndicator(props){

    return(
        props.isLoading ? <IndicatorView/> : null
    )
}

