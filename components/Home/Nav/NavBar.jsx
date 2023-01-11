import Link from "next/link"
import styles from "../../../styles/NavStyles/NavBar.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDiscord} from "@fortawesome/free-brands-svg-icons"
const NavBar = ()=> {
    return (
        <nav className={styles.nav}>
            <div className={styles.navItems}>
                <div className={styles.navlogo}>
                    <FontAwesomeIcon icon={faDiscord}/>Discord
                </div>
                <div className={styles.navlinks}>
                    <Link href="">Download</Link>
                    <Link href="">Nitro</Link>
                    <Link href="">Discover</Link>
                    <Link href="">Safety</Link>
                    <Link href="">Support</Link>
                    <Link href="">Blog</Link>
                    <Link href="">Career</Link>
                </div>
                <button className={styles.navButton}>Open Discord</button>
            </div>
        </nav>
    )
}

export default NavBar