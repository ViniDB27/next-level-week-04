import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompleteChallanges from "../components/CompleteChallanges";
import CountDown from "../components/CountDown";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
          <title>Moveit Next NLW</title>
      </Head>
      <ExperienceBar />

      <section>
          <div>
              <Profile />
              <CompleteChallanges/>
              <CountDown />
          </div>
          <div>

          </div>
      </section>
    </div>
  )
}
