import { receiveMessageOnPort } from "worker_threads";
import {createContext, useState, ReactNode} from 'react'

export const ChallangesContext = createContext({})

interface ChallengesProviderProps {
    children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProviderProps){

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesComplete, setChallengesComplete] = useState(0)

    function levelUp(){
      setLevel(level + 1)
    }
  

    return(
        <ChallangesContext.Provider value={{ level, levelUp, }} >
            {children}
        </ChallangesContext.Provider>
    )
}