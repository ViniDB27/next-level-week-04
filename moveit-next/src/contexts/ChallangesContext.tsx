import {createContext, useState, ReactNode, useEffect} from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import LevelUpModal from '../components/LevelUpModal'


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
    closeLevelUpModal: () => void;

}

interface ChallengesProviderProps {
    children: ReactNode
    level:number
    currentExperience:number
    challengesComplete: number
}


export const ChallangesContext = createContext({} as ChallengesContextData )


export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesComplete, setChallengesComplete] = useState(rest.challengesComplete ?? 0)

    const [activeChallenges, setActiveChallenges] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1 * 10),2)

    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    useEffect(()=>{
        
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengesComplete', String(challengesComplete));

    },[level, currentExperience, challengesComplete])

    function levelUp(){
      setLevel(level + 1)
      setIsLevelUpModalOpen(true)
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

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false)
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
                completeChallenge,
                closeLevelUpModal,
            }} 
        >
            {children}
            
            { isLevelUpModalOpen && <LevelUpModal />}

            
        </ChallangesContext.Provider>
    )
}