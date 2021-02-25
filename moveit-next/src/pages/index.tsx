import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompleteChallanges from "../components/CompleteChallanges";
import CountDown from "../components/CountDown";

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import ChallangeBox from "../components/ChallangeBox";
import { CountDownProvider } from "../contexts/CountDownContext";

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
          <title>Moveit Next NLW</title>
      </Head>
      <ExperienceBar />

      <CountDownProvider>
        <section>
            <div>
                <Profile />
                <CompleteChallanges/>
                <CountDown />
            </div>
            <div>
                <ChallangeBox />
            </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
