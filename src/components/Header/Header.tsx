import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from '@/components/Header/Header.module.css';
import githubWhite from '@/assets/github-white.svg';

const Header: FC<{}> = () => {
    return (
        <header className={styles.header}>
            <Image src="/logo.svg" alt="practease dev logo" width="219" height="31" className={styles.logo}/>
            <nav className={styles.navigation}>
                <Link href="/home" className={styles.navLink}>Home</Link>
                <Link href="/projects" className={styles.navLink}>Projects</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            <button className='button-with-icon button-normal button-primary'>
                <Image src={githubWhite} alt="github logo in white" width="24" height="24"/>
                <span>Connect with Github</span>
            </button>
           
        </header>
    )
}

export default Header;