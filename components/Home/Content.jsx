import Image from "next/image"
import NavBar from "./Nav/NavBar"
import styles from "../../styles/Home.module.scss"
import back1 from "../../public/8a8375ab7908384e1fd6efe408284203.svg"
import back2 from "../../public/c40c84ca18d84633a9d86b4046a91437.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
const Content = ({motion})=> {
    return (
        <section className={styles.homeSec}>
            <NavBar motion={motion}/>
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
                <motion.h2 
                    initial = {{x: '-100vw'}}
                    animate = {{x:0}}
                    transition = {{duration:0.6}}
                    className={styles.title}>IMAGINE A PLACE...</motion.h2>
                <motion.p 
                    initial = {{opacity:0.1}}
                    whileInView = {{
                        opacity: 1,
                        transition: {duration:1.4}
                    }}
                    className={styles.text}>...where you can belong to a school club, a gaming group,
                    or a worldwide art community. Where just you and a handful of friends can spend time together. 
                    A place that makes it easy to talk every day and hang out more often.
                </motion.p>
                <div className={styles.buttons}>
                    <motion.button 
                        whileHover = {{scale:1.03}}
                        whileTap = {{
                        scale:0.9,
                        transition : {duration:0.4},                    
                        }}
                        className={styles.button1}>
                        <FontAwesomeIcon className={styles.icon} icon={faDownload}/> Download for Windows
                    </motion.button>
                    <motion.button 
                        whileHover = {{scale:1.03}}
                        whileTap = {{
                        scale:0.9,
                        transition : {duration:0.4},                    
                        }}
                        className={styles.button2}>Open Discord in your browser</motion.button>
                </div>
            </div>

        </section>
    )
}

export default Content