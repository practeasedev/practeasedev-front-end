import {FC} from 'react';
import styles from '@/components/Loader/Loader.module.css';

const Loader:FC<{}> = () => {
    return (
        <p className={styles.loader} />
    )
}

export default Loader