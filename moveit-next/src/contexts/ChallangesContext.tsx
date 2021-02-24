import {createContext, useState, ReactNode} from 'react'
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: String;
    amount: number
}

interface ChallengesContextData {
    level: number;
    levelUp: () => void; 
    currentExperience:number; 
    challengesComplete: number;
    startNewChallange:() => void; 
    activeChallenges: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number

}

interface ChallengesProviderProps {
    children: ReactNode;
}


export const ChallangesContext = createContext({} as ChallengesContextData )


export function ChallengesProvider({ children }: ChallengesProviderProps){

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesComplete, setChallengesComplete] = useState(0)

    const [activeChallenges, setActiveChallenges] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1 * 4),2)

    function levelUp(){
      setLevel(level + 1)
    }

    function startNewChallange(){
        const challengesRandom = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[challengesRandom]
        setActiveChallenges(challenge)
    }
  

    function resetChallenge(){
        setActiveChallenges(null)
    }

    return(
        <ChallangesContext.Provider 
            value={{ 
                level, 
                levelUp, 
                currentExperience, 
                challengesComplete,
                startNewChallange,
                activeChallenges,
                resetChallenge,
                experienceToNextLevel,

            }} 
        >
            {children}
        </ChallangesContext.Provider>
    )
}