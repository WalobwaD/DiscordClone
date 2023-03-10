import Head from 'next/head'

import styles from '../styles/Index.module.scss'

import Content from '../components/Home/Content'
import Invite from '../components/Invite/Invite'
import Calls from '../components/calls/Calls'
import Fandom from '../components/fandom/Fandom'
import Ready from '../components/ready/Ready'

import {motion} from "framer-motion"

export default function Home() {
  return (
    <>
      <Head>
        <title>DiscordClone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <Content motion={motion}/>
        <Invite motion={motion}/>
        <Calls motion={motion}/>
        <Fandom motion={motion}/>
        <Ready motion={motion}/>

      </main>
    </>
  )
}
