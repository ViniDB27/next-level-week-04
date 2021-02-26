import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangesContext } from "./ChallangesContext";

interface CountDownProviderProvider {
    children: ReactNode;
}


interface CountDownCountextData{
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountDown: () => void,
    resetCountDown: () => void,
}

export const CountDownCountext = createContext({} as CountDownCountextData)

let coutdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProvider){


    const { startNewChallange } = useContext(ChallangesContext)
    
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(25 * 60)
    const [ hasFinished, setHasFinished ] = useState(false)
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        setIsActive(false)
        clearTimeout(coutdownTimeout)
        setTime(0.1 * 60)
        setHasFinished(false)
    }


    useEffect(()=>{
        if(isActive && time > 0){
            coutdownTimeout = setTimeout(()=>{
                setTime(time - 1)
            }, 1000)
        }else if (isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallange()
        }
    },[isActive, time])


    return(
        <CountDownCountext.Provider 
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountDown,
                resetCountDown,
                
            }} 
        >
           {children} 
        </CountDownCountext.Provider>
    )

}