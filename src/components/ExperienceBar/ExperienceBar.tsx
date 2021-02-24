import { useState } from 'react';
import styles from '../../styles/components/ExperienceBar.module.css';
const ExpericencBart = () => {
    const [percent, setPercent] = useState(3);

    return (
        <header className={styles.experienceBar}>
            <span>{percent} xp</span>
            <div>
                <div style={{ width: `${percent}%` }}/>
                
                {percent >= 1 && (
                    <span
                        className={styles.currentExperience}
                        style={{ left: `${percent}%`}}>
                        {percent} xp
                    </span>
                )}
                
            </div>
            <span>600 px</span>
        </header>
    );
}


export default ExpericencBart;