const projects =[
    {
        name:'TaskMaster',
        id:'taskmasterflex',
        desc: 'A web app for task management',
        img: '',
        link: '',
        repo:'',
},
{
    name:'Pokedex',
    id:'pokedex',
    desc: 'A web app for searching for pokemon and stats',
    img: '',
    link: '',
    repo: '',
}
];

export function getProject(projectId){
    return projects.find(({id}) => id === projectId);
}

export function getProjects(){
    return projects
}