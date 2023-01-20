import Image from 'next/image'
import styles from "../../styles/Calls/Calls.module.scss"
import photo from "../../public/575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
const Calls = ({motion})=> {
    return (
        <section className={styles.callSec}>

            <motion.div 
                initial = {{opacity:0}} 
                whileInView = {{
                    opacity:1,
                    y:'-2vw',
                    transition: {
                        duration:1
                    }
                }}
                className={styles.message}>
                <h2 className={styles.title}>
                    Where hanging out is easy
                </h2>
                <p className={styles.text}>
                    Grab a seat in a voice channel when you’re free. 
                    Friends in your server can see you’re around and instantly pop in to talk without having to 
                    call.
                </p>
            </motion.div>
            <Image 
                src= {photo}
                className = {styles.photo}
                alt = "assets"
            />
            
        </section>
    )
}

export default Calls;