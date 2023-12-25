

import './Github.scss'

export const Github =(props) =>{

    const timestamp = new Date(props.created_at);
    // const url = props.repo.url

    return(
    <div className='event-slide'>
       
            
            <a href={`https://github.com/${props.repo.name}`} target='_blank' rel="noreferrer">
            {/* <h3>{props.actor.login}</h3> */}
            {/* <img src={props.actor.avatar_url}/> */}
            <p>{props.type}</p>
            <p>{props.repo.name}</p>
            {/* <p>{`${timestamp.getMonth()}/${timestamp.getDay()}/${timestamp.getFullYear()}`}</p> */}
            <p>{`${timestamp.toLocaleString()}`}</p>
            {/* <p>{`${timestamp.toLocaleTimeString()}`}</p> */}
            </a>
        </div>
    )
}