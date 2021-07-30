import './loadingIndicator.css'

function IndicatorView(){
    return(
            <div className="loader">
            </div>       
    )
}

export default function LoadingIndicator(props){

    return(
        props.isLoading() ? <IndicatorView/> : null
    )
}