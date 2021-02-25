import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/Profile.module.css';

const Profile = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="http://github.com/V1n1c1us.png" alt="Vinícius Diehl de Franceschi"/>
            <div>
                <strong>Vinícius Diehl de Franceschi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Icon"/>    
                    Level {level}
                </p>
            </div>
        </div>
    );
}
export default Profile;