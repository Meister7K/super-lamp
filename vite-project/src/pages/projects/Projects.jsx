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

//     const projectArr =[
//         {
//         'name':'TaskMasterFlex',
//         'route':'/projects/taskmasterflex',
//         'element':'TaskmasterFlex'
// },
// {
//     'name':'1',
//     'route':'1',
//     'img':'',
//     'desc':'',
//     'link':'',
//     'repo':''
// }, 
// ]

    return(
        <>
           
            
            <div className='project-container'> 
            <h1>Projects</h1>
                <nav className='project-nav'>
                <ul>
                    {projects.map(({name, id})=>(
                        <li key={id}>
                            <NavLink to={id} className={` ${active === id ? 'active' : ''}`}>{name}</NavLink> 
                        
                        </li>
                    ))}
                </ul>
            </nav>
            <Suspense fallback={<Loading/>}>
                <Outlet/>
            </Suspense>
                

            </div>
           
           
        </>
    )
}
export default Projects