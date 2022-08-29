import { Link } from "react-router-dom";
import styles from "../styles/navBar.module.css"

export function NavBar(){
    return (
        <nav className={styles.navBar}>
            <Link className={styles.navLink} to='/articles'>Articles</Link>
            <Link className={styles.navLink} to='/topics'>Topics</Link>
            <Link className={styles.navLink} to='/users'>Users</Link>
            <Link className={styles.navLink} to='/profile'>Profile</Link>
        </nav>
    )
}