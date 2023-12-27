import './Projects.scss'
import { lazy, Suspense } from 'react'
import { Routes, Route, Outlet} from 'react-router-dom'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { useState, useRef } from 'react'
// import { Project } from './project/Project.jsx'
import { getProjects } from '../../components/project-api/API'
import { Loading } from '../../components/loading/Loading'

function Projects(){

    const projects = getProjects();

    console.log(projects)

    const [active, setActive] = useState(null)
    // const [toggle, setToggle] = useState(false)

    const location = useLocation();


    return(
        <>
            <div className='project-container page'> 
                
                <nav className='project-nav'>
                    <h1>Projects</h1>
                <ul>
                    {projects.map(({name, id})=>(
                        <>
                        <NavLink to={id} className={` ${active === id ? 'active' : ''}`}><li key={id}>
                            {name}
                        
                        </li>
                        </NavLink>
                        </>
                    ))}
                </ul>
            </nav>
            <div className='pro-output'>
            <Suspense fallback={<Loading/>}>
                <Outlet/>
            </Suspense>
            </div>
            </div>
        </>
    )
}
export default Projects