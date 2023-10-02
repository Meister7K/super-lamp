import './Loading.scss'



export const Loading = () =>{

    return(
        <>
        <div className='loading'>
            <h1>Loading </h1>
            <div className='dots'>
                <div className='dot' id='dot1'><h1>.</h1></div>
                <div className='dot' id='dot2'><h1>.</h1></div>
                <div className='dot' id='dot3'><h1>.</h1></div>
            </div>
                
            
        </div>
            
        </>
    )
}