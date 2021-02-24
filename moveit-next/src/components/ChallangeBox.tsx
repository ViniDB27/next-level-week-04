import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/ChallangeBox.module.css';

export default function ChallangeBox(){

    const contextData = useContext(ChallangesContext)

    const hasActiveChallanged = true

    return(
        <div className={styles.challangeBoxContainer} >
            {hasActiveChallanged ? (

                <div className={styles.challangeBoxActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo Desafio</strong>
                        <p>levante e faça uma caminhada de 3 min</p>
                        <footer>
                            <button type="button" className={styles.challangeFaileButton} >Falhei</button>
                            <button type="button" className={styles.challangeSucceededButton} >Completei</button>
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