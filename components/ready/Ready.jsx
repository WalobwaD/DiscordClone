import styles from "../../styles/ready/Ready.module.scss"
import Image from "next/image"
import photo from "../../public/98ea5b9e92e304c7d352ac462996adc5.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faDownload} from "@fortawesome/free-solid-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
const Ready = ({motion})=> {
    return (
        <section className={styles.readSec}>
            <motion.div 
                initial = {{opacity:0}}
                whileInView = {{
                    opacity: 1,
                    y: '2vh',
                    transition : {
                        duration : 1
                    }
                }}
                className={styles.message}>
                <h2 className={styles.title}>RELIABLE TECH FOR STAYING CLOSE</h2>
                <p className={styles.text}>Low-latency voice and video feels like you’re in the same room. 
                    Wave hello over video, watch friends stream their games, 
                    or gather up and have a drawing session with screen share.
                </p>
            </motion.div>
            <Image
                src={photo}
                alt="photo"
                className={styles.photo}
            />

            <div className={styles.bottom}>
                <h2 className={styles.title}>Ready to start your journey?</h2>
                <button className={styles.button}> 
                    <FontAwesomeIcon
                        className={styles.icon} 
                        icon={faDownload}/>
                         Download for windows
                    </button>
                    <FontAwesomeIcon
                        className={` ${styles.discord}`} 
                        icon={faDiscord}

                    />
            </div>

        </section>
    )
}

export default Ready