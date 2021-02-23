import styles from '../styles/components/Profile.module.css'

export default function Profile()
{

    return(
        <div className={styles.profileContainer} >
            <img src="https://github.com/ViniDB27.png" alt="Vinicio Brejinski"/>
            <div>
                <strong>Vinicio Brejinski</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )

}