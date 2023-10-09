import { getProject } from '../../../components/project-api/API'
import { useParams } from "react-router-dom";
import './Project.scss'
import { PokeLook } from '../../../components/api-caller/PokeLook'



export const Project = () => {

    const { id } = useParams();
    const project = getProject(id)
    // console.log(useParams())

    return (
        <>
            <div className='pro-data'>
                <h2>{project.name}</h2>
                <h4>{project.desc}</h4>
                {project.goal ?<p> <span>Goal:</span> {project.goal}</p>:''}
                {project.link ? <a target='_blank' href={project.link} rel="noreferrer"><button>Link </button></a> : ''}

                {project.repo ? <a target='_blank' href={project.repo} rel="noreferrer"><button>Repository </button></a> : ''}

                {project.component === 'PokeLook' ? <PokeLook /> : ''}
            </div>

           { project.img ? <img className='pro-img' src={project.img} /> : ''}

            { project.tech ? <div className='tech-icons'>
                {}
            </div> : ''}

        </>
    )
}