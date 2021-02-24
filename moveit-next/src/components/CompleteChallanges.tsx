import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/CompleteChanllanges.module.css'

export default function CompleteChanllanges(){

    const { challengesComplete } = useContext(ChallangesContext)

    return(
        <div className={styles.completeChanllangesContainer} >
            <span>Desafios Completos</span>
            <span>{challengesComplete}</span>
        </div>
    )
}