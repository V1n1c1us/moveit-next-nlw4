import styles from '../../styles/components/Profile.module.css';

const Profile = () => (
    <div className={styles.profileContainer}>
        <img src="http://github.com/V1n1c1us.png" alt="Vinícius Diehl de Franceschi"/>
        <div>
            <strong>Vinícius Diehl de Franceschi</strong>
            <p>
                <img src="icons/level.svg" alt="Level Icon"/>    
                Level 1
            </p>
        </div>
    </div>
);

export default Profile;