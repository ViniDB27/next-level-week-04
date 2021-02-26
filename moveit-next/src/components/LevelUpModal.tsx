import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export default function LevelUpModal() {
    
    const { level, closeLevelUpModal } = useContext(ChallangesContext)

    return(
        <div className={styles.overlay} >
            <div className={styles.container} >
                
                <header>{level}</header>
                
                <strong>Parabéns</strong>
                
                <p>Voce alcançou um novo lelvel.</p>
                
                <button type="button" onClick={closeLevelUpModal} >
                    <img src="icons/close.svg" alt="Fechar modal"/>
                </button>

            </div>
        </div>
    )

}