import { useState } from 'react'
import styles from '../styles/components/CountDown.module.css'

export default function CountDown(){

    const [time, setTime] = useState(25 * 60)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

            <button type="button" className={styles.countDownButton} >
                iniciar um cilco
            </button>
        </div>
    )
}