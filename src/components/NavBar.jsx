import { Link } from "react-router-dom";


export function NavBar(){
    return (
        <nav>
            <Link to='/articles'>Articles</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/users'>Users</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
    )
}