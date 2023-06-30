import {FC} from 'react';
import styles from '@/components/Comment/Comment.module.css';
import Image from 'next/image';

const Comment: FC<{}> = () => {
    return (
        <div className={styles.commentContainer}>
            <div className={styles.userInfo}>
                <Image width="50" height="50" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="A user profile picture" className={styles.userPic}/>
                <div className={styles.userDetails}>
                    <p className={styles.userName}>Rahul Sipliging</p>
                    <p className={styles.commentDate}>12 Jul,2020</p>
                </div>
            </div>
            <p className={styles.comment}>
                Can any body tell me how to do this project?
            </p>
        </div>
    );
}

export default Comment;