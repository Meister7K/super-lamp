import './Blog.scss'
import { useState } from 'react'
import { PokeLook } from '../../components/api-caller/PokeLook'


function Blog(){

   

    return(
        <>
        <div className='blog-container'>
          <PokeLook/>
            
        </div>
            
        </>
    )
}

export default Blog