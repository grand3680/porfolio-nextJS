interface nav {
    id : number,
    title : string,
    path : string
}

const navigations : nav[] = [
    {id: 1, title: 'home', path: '/'},
    {id: 2, title: 'about', path: '/about'},
    {id: 3, title: 'skills', path: '/skills'},        
]

export default navigations;