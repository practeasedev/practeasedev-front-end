import {FC, useState, MouseEvent, useEffect} from 'react';
import styles from '@/components/ProjectsMenu/ProjectsMenu.module.css';
import Image from 'next/image';
import horizantalEllipsis from '@/assets/horizantal-ellipsis.svg';

const ProjectsMenu:FC<{}> = () => {
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);

    const toggleMenuDisplay = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setDisplayMenu((previousValue) => (!previousValue) )
    }

    useEffect(() => {
        window.addEventListener('click', () => {
            setDisplayMenu(false);
        })
    })
    return (
        <div className={styles.menuContainer}>
            <button className={`${styles.menuTrigger} button button-with-icon button-secondary-light button-medium`} onClick={toggleMenuDisplay}>
                <Image src={horizantalEllipsis} alt="A horizantal ellispis icon" className={styles.horizantalEllipsis}/>
                <span>Menu</span>    
            </button>
            {displayMenu ? (
                <div className={styles.menu}>
                    <div className={styles.categories}>
                        <p className={styles.subMenuHeading}>Categories</p>
                        <ul className={styles.subMenu}>
                            <li className={styles.subMenuItem}>
                                HTML CSS JS
                                <ul className={styles.insideMenu}>
                                    <li className={styles.insideMenuItem}>Components</li>
                                    <li className={styles.insideMenuItem}>Single Page</li>
                                    <li className={styles.insideMenuItem}>Multi Page</li>
                                </ul>
                            </li>
                            <li className={styles.subMenuItem}>Backend</li>
                            <li className={styles.subMenuItem}>Full Stack</li>
                        </ul>
                    </div>
                    <div className={styles.sortAndFilter}>
                        <div className={styles.Filter}>
                            <p className={styles.subMenuHeading}>Filter</p>
                            <ul className={styles.subMenu}>
                                <li className={styles.subMenuCheckbox}>
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="beginner" className="checkbox"/>
                                        <label htmlFor="beginner" className="checkbox-label">Beginner</label>
                                    </div>
                                </li>
                                <li className={styles.subMenuCheckbox}>    
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="intermediate" className="checkbox"/>
                                        <label htmlFor="intermediate" className="checkbox-label">Intermediate</label>
                                    </div>
                                </li>
                                <li className={styles.subMenuCheckbox}>    
                                    <div className="checkbox-group">
                                        <input type="checkbox" id="advanced" className="checkbox"/>
                                        <label htmlFor="advanced" className="checkbox-label">Advanced</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.sort}>
                            <p className={styles.subMenuHeading}>Sort</p>
                            <ul className={styles.subMenu}>
                                <li className={styles.subMenuItem}>
                                    Most Liked
                                </li>
                                <li className={styles.subMenuItem}>
                                    Most Recent
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProjectsMenu;