import { Link } from "react-router-dom";


export function NavBar(){
    return (
        <nav id='nav-bar'>
            <Link className='nav-link' to='/articles'>Articles</Link>
            <Link className='nav-link' to='/topics'>Topics</Link>
            <Link className='nav-link' to='/users'>Users</Link>
            <Link className='nav-link' to='/profile'>Profile</Link>
        </nav>
    )
}