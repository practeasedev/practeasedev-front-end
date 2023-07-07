import {FC} from 'react';
import styles from '@/components/AuthLoader/AuthLoader.module.css';
import Loader from '../Loader/Loader';

interface AuthLoaderProps {
    message: string
}

const AuthLoader:FC<AuthLoaderProps> = (props) => {
    const {message} = props;
    return (
        <div className={styles.authLoadingContainer}>
            <div className={styles.authorizingAnimation}>
                <div className={styles.authorizingInfo}>
                    <Loader />
                    <p className={styles.authorizingText}>{message}</p>
                </div>
            </div>
        </div>
    )
};

export default AuthLoader;