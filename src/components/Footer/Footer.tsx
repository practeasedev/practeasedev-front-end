import { FC } from 'react';
import Image from 'next/image';
import styles from '@/components/Footer/Footer.module.css';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { INTERSECTION_OBSERVER_OPTIONS } from '@/common/Constants';

const Footer:FC<{}> = () => {
    const [footerRef, footerInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);

    return (
        <footer className={`${styles.footer} ${footerInView ? 'fadeIn' : ''}`} ref={footerRef}>
            <div className={styles.brandCopyright}>
                <Image src="/logo.svg" alt="practease dev logo" className={styles.logo} width="219" height="31"/>
                <p className={styles.tagline}>A place to hone your web dev skills</p>
                <p className={styles.copyright}>Copyright &copy; 2023. All rights reserved</p>
            </div>
            <div className={styles.quickLinks}>
                <p className={styles.linkGroupHeading}>Quick links</p>
                <ul className={styles.links}>
                    <li><Link href="/" className={styles.footerlink}>Home</Link></li>
                    <li><Link href="/projects" className={styles.footerlink}>Projects</Link></li>
                    <li><Link href="/contact" className={styles.footerlink}>Contact</Link></li>
                </ul>
            </div>
            <div className={styles.importantLinks}>
            <p className={styles.linkGroupHeading}>Important links</p>
                <ul className={styles.links}>
                    <li><Link href="/terms-and-conditions" className={styles.footerlink}>Terms & Conditions</Link></li>
                    <li><Link href="/privacy-policy" className={styles.footerlink}>Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer;