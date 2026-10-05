import tick from '../assets/done.svg'
export default function LoadingBox({state = false}){
    return(
        <div className="loading-box">
            {state && <img className='done-tick' src={tick} />}
           {!state && <div className="loader"></div>}
            <div className="message">
                <p>{!state ?`Saving status...` : 'Status updated'}</p>
                <span>{!state ? `Talking to server` : 'Status now set'}</span>
            </div>
        </div>
    )
}