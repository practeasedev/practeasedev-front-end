import { FC, useEffect, useState } from 'react';
import styles from '@/components/SideMenu/SideMenu.module.css';
import Link from 'next/link';
import githubWhite from '@/assets/github-white.svg';
import Image from 'next/image';
import SVG from '../SVG/SVG';
import { checkIfLoggedIn } from '@/common/Helper';
import { GITHUB_AUTHORIZE, LOGOUT_USER } from '@/common/APIPaths';
import * as api from '@/common/HttpService'

interface SideMenuProps {
    closeHandler: () => void;
    logoutUser: () => void;
}

const SideMenu:FC<SideMenuProps> = (props) => {
    const { closeHandler, logoutUser } = props;
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        setIsLoggedIn(checkIfLoggedIn());
    },[])
    return (
        <div className={`${styles.sideMenuContainer} fadeIn`}>
            <div className={`${styles.sideMenu} fadeInFromRight`}>
                <div className={styles.userInfo}>
                    {isLoggedIn ? (
                        <div className={styles.userDetails}>
                            <p className={styles.userName}>Bhanu Teja</p>
                            <ul className={styles.userLinks}>
                                <li>
                                    <p className={styles.logout} onClick={logoutUser}>
                                        <SVG iconName='logout' className={styles.logoutIcon}/>
                                        <span>Logout</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link
                            href={`${GITHUB_AUTHORIZE}?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=user:email`}
                            className={styles.loginLink}
                        >
                            <button className="button-with-icon bu  tton-normal button-primary">
                            <Image
                                src={githubWhite}
                                alt="github logo in white"
                                width="24"
                                height="24"
                            />
                            <span>Connect with Github</span>
                            </button>
                        </Link>
                    )}
                </div>
                <div className={styles.sideNavContainer}>
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
                </div>
                <p onClick={closeHandler} className={styles.closeIconContainer}>
                    <SVG iconName='chevron-right' className={styles.closeIcon}/>
                </p>
            </div>
        </div>
    )
};

export default SideMenu;
