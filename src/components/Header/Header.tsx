import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from '@/components/Header/Header.module.css';
import githubWhite from '@/assets/github-white.svg';
import { GITHUB_AUTHORIZE, LOGOUT_USER } from "@/common/APIPaths";
import { checkIfLoggedIn, getLoggedInUserDetails } from "@/common/Helper";
import SVG from "../SVG/SVG";
import * as api from '@/common/HttpService' 
import AuthLoader from "../AuthLoader/AuthLoader";
import { CATEGORIES } from "@/common/Constants";

const Header: FC<{}> = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userDetails, setUserDetails] = useState<any>(null);
    const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
    const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

    const logoutUser = () => {
        api.remove({url: LOGOUT_USER, loadingHandler: setIsAuthLoading}).then((res) => {
            if(res.success){
                window.location.reload();
            }
        })
    }

    useEffect(() => {
        setIsLoggedIn(checkIfLoggedIn());
    },[]);

    useEffect(() => {
        if(isLoggedIn) {
            setUserDetails(getLoggedInUserDetails());
        }
    },[isLoggedIn]);

    return (
        <header className={styles.header}>
            <Image src="/logo.svg" alt="practease dev logo" width="219" height="31" className={styles.logo}/>
            <nav className={styles.navigation}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href={`/projects/${CATEGORIES.ALL}`} className={styles.navLink}>Projects</Link>
                <Link href="/blog" className={styles.navLink}>Blog</Link>
                <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>
            {isLoggedIn ? (
                <div className={styles.userMenuContainer}>
                    <p className={styles.userName} onClick={() => {setShowUserMenu(prev => !prev);}}>
                        <span>{userDetails?.userName}</span>
                        <SVG iconName="chevron-down" />
                    </p>
                    {showUserMenu ? (
                        <ul className={styles.userMenu}>
                            <li className={styles.menuOption} onClick={() => {logoutUser();}}>
                                Logout
                            </li>
                        </ul>
                    ) : null }
                </div>
            ): (
                <Link href={`${GITHUB_AUTHORIZE}?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`} className={styles.loginLink}>
                    <button className='button-with-icon button-normal button-primary'>
                        <Image src={githubWhite} alt="github logo in white" width="24" height="24"/>
                        <span>Connect with Github</span>
                    </button>
                </Link> 
            )}
            {isAuthLoading ? <AuthLoader message="Logging out. Please wait"/> : null}
        </header>
    )
}

export default Header;