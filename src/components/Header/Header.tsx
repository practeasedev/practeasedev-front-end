import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "@/components/Header/Header.module.css";
import githubWhite from "@/assets/github-white.svg";
import { DELETE_USER, GITHUB_AUTHORIZE, LOGOUT_USER } from "@/common/APIPaths";
import { checkIfLoggedIn, getLoggedInUserDetails, removeCookie } from "@/common/Helper";
import SVG from "../SVG/SVG";
import AuthLoader from "../AuthLoader/AuthLoader";
import { NextRouter, useRouter } from "next/router";
import SideMenu from "../SideMenu/SideMenu";
import { JWT_TOKEN_COOKIE_NAME } from "@/common/Constants";
import ConfirmationPopup from "../ConfirmationPopup/ConfirmationPopup";
import * as API from '@/common/HttpService';

const Header: FC<{}> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>(null);
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState<boolean>(false);
  const router:NextRouter = useRouter();
  const [isDeletingUser, setIsDeletingUser] = useState<boolean>(false);
  const { pathname } = router;

  const logoutUser = () => {
    removeCookie(JWT_TOKEN_COOKIE_NAME);
    window.location.reload();
  };

  useEffect(() => {
    setIsLoggedIn(checkIfLoggedIn());
  }, [router]);

  useEffect(() => {
    if (isLoggedIn) {
      setUserDetails(getLoggedInUserDetails());
    }
  }, [isLoggedIn]);

  const deleteUserAccount = async(reason:string) => {
    API.remove({
      url: DELETE_USER,
      body: {
        reason
      },
      loadingHandler: setIsDeletingUser,
    }).then((res) => {
      if(res.success) {
        setShowConfirmationPopup(false);
        logoutUser();
      }
    });
  }

  return (
    <>
      <header className={`${styles.header} fadeIn`}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="practease dev logo"
            width="219"
            height="31"
            className={styles.logo}
          />
        </Link>
        
        <nav className={styles.navigation}>
          <Link href="/" className={pathname === '/' ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}>
            Home
          </Link>
          <Link href={`/projects`} className={pathname === '/projects' ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}>
            Projects
          </Link>
          {/* <Link href="/blog" className={styles.navLink}>
            Blog
          </Link> */}
          <Link href="/contact" className={pathname === '/contact' ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}>
            Contact
          </Link>
        </nav>
        {isLoggedIn ? (
          <div className={styles.userMenuContainer}>
            <p
              className={styles.userName}
              onClick={() => {
                setShowUserMenu((prev) => !prev);
              }}
            >
              <span>{userDetails?.userName}</span>
              <SVG iconName="chevron-down" />
            </p>
            {showUserMenu ? (
              <ul className={styles.userMenu}>
                <li
                  className={styles.menuOption}
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  Logout
                </li>
                <li
                  className={`${styles.menuOption} ${styles.dangerOption}`}
                  onClick={() => {
                    setShowConfirmationPopup(true);
                  }}
                >
                  Delete Account
                </li>
              </ul>
            ) : null}
          </div>
        ) : (
          <Link
            href={`${GITHUB_AUTHORIZE}?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=user:email`}
            className={styles.loginLink}
          >
            <button className="button-with-icon button-normal button-primary">
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
        {isAuthLoading ? <AuthLoader message="Logging out. Please wait" /> : null}
      </header>
      <header className={styles.mobileHeader}>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="practease dev logo"
              width="219"
              height="31"
              className={styles.mobileLogo}
            />
          </Link>
          <p onClick={() => { setShowSideMenu(true); }}>
            <SVG iconName="menu-open" width="36" height="36" className={styles.menuOpenIcon}/>
          </p>
          {showSideMenu ? (
            <SideMenu
              closeHandler={() => { setShowSideMenu(false); }}
              logoutUser={logoutUser}
            />
          ) : null}
          
        </header>
        {showConfirmationPopup ? (
          <ConfirmationPopup
            yesButtonHandler={deleteUserAccount}
            yesButtonName="Yes, I am"
            noButtonName="No, I am not"
            closePopupHandler={() => { setShowConfirmationPopup(false) }}
            message="Are you sure you to delete your account?.(Please note your data will not be wiped off completely from our database but we will display any content you generated in the website)"
            loading={isDeletingUser}
          />
        ) : null} 
    </>
  );
};

export default Header;
