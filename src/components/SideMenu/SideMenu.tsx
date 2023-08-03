import { FC } from 'react';
import styles from '@/components/SideMenu/SideMenu.module.css';
import Link from 'next/link';
import SVG from '../SVG/SVG';

interface SideMenuProps {
    closeHandler: () => void;
}

const SideMenu:FC<SideMenuProps> = (props) => {
    const { closeHandler } = props;
    return (
        <div className={`${styles.sideMenuContainer} fadeIn`}>
            <div className={`${styles.sideMenu} fadeInFromRight`}>
                <ul className={styles.sideNav}>
                    <li>
                        <Link href="/" className={styles.sideNavLink} onClick={closeHandler}>Home</Link>
                    </li>
                    <li>
                        <Link href="/projects" className={styles.sideNavLink} onClick={closeHandler}>Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.sideNavLink} onClick={closeHandler} >Contact</Link>
                    </li>
                </ul>
                <p onClick={closeHandler}>
                    <SVG iconName='close' className={styles.closeIcon}/>
                </p>
            </div>
        </div>
    )
};

export default SideMenu;
