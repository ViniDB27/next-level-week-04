import style from '../styles/components/ExperienceBar.module.css'

export default function ExperienceBar(){
    return(
        <header className={style.experienceBar} >
            <span>0 px</span>
            <div>
                <div style={{ width: '50%' }}>
                    <span className={style.currentExperience} style={{ left: '50%' }} >300 xp</span>
                </div>
            </div>
            <span>600 px</span>
        </header>
    );
}