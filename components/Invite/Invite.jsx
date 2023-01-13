import  styles from "../../styles/Invite/Invite.module.scss"
import photo from "../../public/46b2132c01604c9493d558de444929f4.svg"
import Image from "next/image"
const Invite = ({motion})=> {
    return (
        <section 

            className={styles.inviteSec}>
            <Image
                src={photo}
                alt="invites"
                className={styles.photo}
            />
            <motion.div 
                initial = {{
                    opacity:0}}
                whileInView = {{
                    opacity: 1,
                    x:'-1vw',
                    transition: {duration:1}
                }}
                className={styles.message}>
                <h2 className={styles.title}>Create an invite-only place where you belong</h2>
                <p className={styles.text}>
                    Discord servers are organized into topic-based channels where you can collaborate, 
                    share, and just talk about your day without clogging up a group chat.
                </p>
            </motion.div>
        </section>
    )
}

export default Invite;