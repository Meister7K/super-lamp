import {getProject} from '../../../components/project-api/API'
import { useParams } from "react-router-dom";
import './Project.scss'



export const Project=()=>{

    const {id} = useParams();
    const project = getProject(id)
    console.log(useParams())

    return(
        <>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <img src={project.img}/>
        </>
    )
}