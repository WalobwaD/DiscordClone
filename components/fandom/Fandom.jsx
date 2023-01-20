import styles from "../../styles/fandom/Fandom.module.scss"
import photo from "../../public/921b1ae33edca174b6ebe787bb8b6c3b.svg"
import Image from "next/image"
const Fandom = ({motion}) => {
    return (
        <section className={styles.fanSec}>
            <Image
                src={photo}
                alt="photo"
            />
            <motion.div 
                initial = {{opacity:0}}
                whileInView = {{
                    opacity:1,
                    x:'3vw',
                    transition: {
                        duration:1
                    }
                }}
                className={styles.message}>
                <h2 className={styles.title}>From few to a fandom</h2>
                <p className={styles.text}>
                    Get any community running with moderation tools and custom member access. 
                    Give members special powers, set up private channels, and more.
                </p>
            </motion.div>
        </section>
    )
}

export default Fandom