import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import style from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar(){
 
    const { currentExperience, experienceToNextLevel } = useContext(ChallangesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return(
        <header className={style.experienceBar} >
            <span>0 px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}>
                    <span className={style.currentExperience} style={{ left: `${percentToNextLevel}%` }} >{currentExperience} xp</span>
                </div>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    );
}