import {createContext, useState, ReactNode, useEffect} from 'react'
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
    experienceToNextLevel: number;
    completeChallenge: ()=> void;

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

    const experienceToNextLevel = Math.pow((level + 1 * 10),2)

    useEffect(()=>{
        
    },[])

    function levelUp(){
      setLevel(level + 1)
    }

    function startNewChallange(){
        const challengesRandom = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[challengesRandom]
        setActiveChallenges(challenge)
        Notification.requestPermission()

        new Audio('/notification.mp3').play()

        if(Notification.permission === 'granted' ){
            new Notification('Novo Desafio 🎉', {
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }
  

    function resetChallenge(){
        setActiveChallenges(null)
    }

    function completeChallenge(){

        if(!activeChallenges)return;

        const { amount } = activeChallenges
        
        let finalEperience = (currentExperience + amount)

        if(finalEperience >= experienceToNextLevel){
            finalEperience = (finalEperience - experienceToNextLevel)
            levelUp()
        }

        setCurrentExperience(finalEperience)
        setActiveChallenges(null)
        setChallengesComplete(challengesComplete + 1)

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
                completeChallenge
            }} 
        >
            {children}
        </ChallangesContext.Provider>
    )
}