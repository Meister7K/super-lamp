import TMF from '../../assets/images/TMF.png'
import Poke from '../../assets/images/pokedEX.jpg'


const projects =[
    {
        name:'TaskMaster',
        id:'taskmasterflex',
        desc: 'A web app for task management',
        img: TMF,
        link: 'https://taskmaster-flex-be1c20d82d58.herokuapp.com/',
        repo:'https://github.com/Meister7K/TaskMaster-Flex',
},
{
    name:'Pokedex',
    id:'pokedex',
    desc: 'A web app for searching for pokemon and stats',
    img: Poke,
    link: '',
    repo: '',
    component:'PokeLook',
}
];

export function getProject(projectId){
    return projects.find(({id}) => id === projectId);
}

export function getProjects(){
    return projects
}