import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import CompleteChallanges from "../components/CompleteChallanges";
import CountDown from "../components/CountDown";
import { GetServerSideProps } from 'next'


import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import ChallangeBox from "../components/ChallangeBox";
import { CountDownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallangesContext";

interface HomeProps {
  level:number
  currentExperience:number
  challengesComplete: number
}

export default function Home({level, currentExperience, challengesComplete}: HomeProps) {
  return (
    <ChallengesProvider 
      level={level} 
      currentExperience={currentExperience} 
      challengesComplete={challengesComplete}
    >
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
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesComplete} = ctx.req.cookies
 
  return {
    props:{
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesComplete: Number(challengesComplete),
    }
  }
}

