import Image from "next/image"
import NavBar from "./Nav/NavBar"
import styles from "../../styles/Home.module.scss"
import back1 from "../../public/8a8375ab7908384e1fd6efe408284203.svg"
import back2 from "../../public/c40c84ca18d84633a9d86b4046a91437.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
const Content = ()=> {
    return (
        <section className={styles.homeSec}>
            <NavBar/>
            <Image 
                src={back1}
                alt="backimage"
                className={styles.back1}
            />
            <Image 
                src={back2}
                alt="backimage"
                className={styles.back2}
            />
            <div className={styles.content}>
                <h2 className={styles.title}>IMAGINE A PLACE...</h2>
                <p className={styles.text}>...where you can belong to a school club, a gaming group,
                 or a worldwide art community. Where just you and a handful of friends can spend time together. 
                 A place that makes it easy to talk every day and hang out more often.</p>
                <div className={styles.buttons}>
                    <button className={styles.button1}>
                        <FontAwesomeIcon className={styles.icon} icon={faDownload}/> Download for Windows
                    </button>
                    <button className={styles.button2}>Open Discord in your browser</button>
                </div>
            </div>

        </section>
    )
}

export default Content