import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import { CountDownCountext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallangeBox.module.css';

export default function ChallangeBox(){

    const { activeChallenges, resetChallenge, completeChallenge } = useContext(ChallangesContext)
    const { resetCountDown } = useContext(CountDownCountext)
 
    function handleChallengeSucceded() {
        completeChallenge()
        resetCountDown()
    }

    function handlChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }


    return(
        <div className={styles.challangeBoxContainer} >
            {activeChallenges ? (

                <div className={styles.challangeBoxActive}>
                    <header>Ganhe {activeChallenges.amount}xp</header>
                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`} alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenges.description}</p>
                        <footer>
                            <button onClick={handlChallengeFailed} type="button" className={styles.challangeFaileButton} >Falhei</button>
                            <button onClick={handleChallengeSucceded} type="button" className={styles.challangeSucceededButton} >Completei</button>
                        </footer>
                    </main>
                </div>

            ) : (

                <div className={styles.challangeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up"/>
                            Avance de level completando desafios
                        </p>
                </div>

            )}
        </div>
    )
}