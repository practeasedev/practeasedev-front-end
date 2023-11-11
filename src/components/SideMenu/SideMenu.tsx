import { FC, useEffect, useState } from 'react';
import styles from '@/components/SideMenu/SideMenu.module.css';
import Link from 'next/link';
import githubWhite from '@/assets/github-white.svg';
import Image from 'next/image';
import SVG from '../SVG/SVG';
import {  getLoggedInUserDetails } from '@/common/Helper';
import { IUserDetails } from '@/common/Types';
import { GITHUB_AUTHORIZE } from '@/common/APIPaths';

interface SideMenuProps {
    closeHandler: () => void;
    logoutUser: () => void;
    openConfirmationPopup: () => void;
}

const SideMenu:FC<SideMenuProps> = (props) => {
    const { closeHandler, logoutUser, openConfirmationPopup } = props;
    const [loggedInUser, setLoggedInUser] = useState<IUserDetails | null>();


    useEffect(() => {
        const loggedInUserDetails = getLoggedInUserDetails();;
        setLoggedInUser(loggedInUserDetails);
    },[])
    return (
        <div className={`${styles.sideMenuContainer} fadeIn`}>
            <div className={`${styles.sideMenu} fadeInFromRight`}>
                <div className={styles.userInfo}>
                    {!!loggedInUser ? (
                        <div className={styles.userDetails}>
                            <p className={styles.userName}>{loggedInUser.userName}</p>
                            <ul className={styles.userLinks}>
                                <li>
                                    <p className={styles.userLink} onClick={logoutUser}>
                                        <SVG iconName='logout' height='24' width="24"/>
                                        <span>Logout</span>
                                    </p>
                                </li>
                                <li>
                                    <p className={styles.userLink} onClick={() => {openConfirmationPopup()}}>
                                        <SVG iconName='delete' height='24' width="24" fill='#DC4C64'/>
                                        <span className={styles.dangerLinkName}>Delete Account</span>
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
