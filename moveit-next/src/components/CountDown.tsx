import { useState, useEffect, useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CountDown.module.css'

let coutdownTimeout: NodeJS.Timeout;

export default function CountDown(){

    const { startNewChallange } = useContext(ChallangesContext)
    
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0.1 * 60)
    const [ hasFinished, setHasFinished ] = useState(false)
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
    
    function startCountDown(){
        setIsActive(true)
    }

    function resetCountDown(){
        setIsActive(false)
        clearTimeout(coutdownTimeout)
        setTime(0.1 * 60)
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
        <div>
            <div className={styles.countDownContainer} >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={styles.countDownButton}            
                >
                    Ciclo encerrado
                </button>

            ):(
                <>

                    {isActive ?(

                    <button 
                        type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                        onClick={resetCountDown}

                    >
                        Abandonar Cilco
                    </button>

                    ):(

                    <button 
                        type="button" 
                        className={styles.countDownButton}
                        onClick={startCountDown}

                    >
                        iniciar Cilco
                    </button>

                    )}

                </>
            )}

           
        </div>

    )
}