import { FC, useState, MouseEvent, useEffect, ChangeEvent, useRef } from "react";
import styles from "@/components/ProjectsMenu/ProjectsMenu.module.css";
import Image from "next/image";
import horizantalEllipsis from "@/assets/horizantal-ellipsis.svg";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";
import { menusOutsideClickHandler } from "@/common/Helper";

interface ProjectsMenuProps {
    getProjects: (body:any) => void
}

const ProjectsMenu: FC<ProjectsMenuProps> = (props) => {
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);

    //states
    const [categories, setCategories] = useState<Array<string>>(["components","single-page","multi-page"]);
    const [filters, setFilters] = useState<Array<string>>([]);
    const [sort, setSort] = useState<string>("most-recent");

    //storing current state for resets
    const [storedCategories, setStoredCategories] = useState<Array<string>>(["components","single-page","multi-page"]);
    const [storedSort, setStoredSort] = useState<string>("most-recent");
    const [storedFilters, setStoredFilters] = useState<Array<string>>([]);


    const {getProjects} = props;

    const toggleMenuDisplay = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if(displayMenu) {
            resetCategoriesAndFilters();
        }
        setDisplayMenu((previousValue) => !previousValue);
        
    };

    const categoryChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const {value, checked} = event.target;
        if(checked) {
            setCategories((prevcategories) =>{
                const newCategories =  [...prevcategories, value];
                return newCategories;
            });
        } else {
            setCategories((prevCategories) =>  {
                const newCategories = prevCategories.filter((category) => (category !== value));
                return newCategories;
            });
        }
    }

    const filterChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const {value, checked} = event.target;

        if(checked) {
            setFilters((prevFilters) => ([...prevFilters, value]));
        } else {
            setFilters((prevFilters) => (prevFilters.filter((filter) => (filter !== value))));
        }
    }

    const sortChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const {value, checked} = event.target
        if (checked) {
            setSort(value);
        }
    }
     
    const applyCategoriesAndFilters = (event:MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        const body:any ={
            categories:categories,
            filters:filters,
            sort: sort
        };
        getProjects(body);
        setDisplayMenu(false); 
    }

    const resetCategoriesAndFilters = () => {
        setCategories(storedCategories);
        setFilters(storedFilters);
        setSort(storedSort);
    }

    const outsideClickHandler = () => {
        resetCategoriesAndFilters();
        setDisplayMenu(false);
    }

    const storeCurrentStateForReset = () => {
        setStoredCategories(categories);
        setStoredSort(sort);
        setStoredFilters(filters);
    }

    useEffect(() => { 
        return menusOutsideClickHandler(window, outsideClickHandler)
    },[]);

    useEffect(() => {
        if(displayMenu) {
           storeCurrentStateForReset();
        }
    },[displayMenu]);

    return (
        <div className={styles.menuContainer}>
            <button
                className={`${styles.menuTrigger} button button-with-icon button-secondary-light button-normal`}
                onClick={toggleMenuDisplay}
            >
                <Image
                    src={horizantalEllipsis}
                    alt="A horizantal ellispis icon"
                    className={styles.horizantalEllipsis}
                />
                <span>Filters & Sort</span>
            </button>
            {displayMenu ? (
                <div className={styles.menuWrapper}>
                    <div
                        className={styles.menu}
                        onClick={(event: MouseEvent<HTMLDivElement>) => {
                            event.stopPropagation();
                        }}
                    >
                        <div className={styles.categories}>
                            <p className={styles.subMenuHeading}>Categories</p>
                            <ul className={styles.subMenu}>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Components"
                                        value="components"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('components')} 
                                    />
                                </li>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Single Page"
                                        value="single-page"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('single-page')}  
                                    />
                                </li>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Multi Page"
                                        value="multi-page"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('multi-page')}  
                                    />
                                </li>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Backend"
                                        value="backend"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('backend')}
                                        disabled={true} 
                                    />
                                </li>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Full Stack"
                                        value="full-stack"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('full-stack')}
                                        disabled={true} 
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={styles.sortAndFilter}>
                            <div className={styles.Filter}>
                                <p className={styles.subMenuHeading}>Filter</p>
                                <ul className={styles.subMenu}>
                                    <li className={styles.subMenuCheckbox}>
                                        <Checkbox
                                            label="Beginner"
                                            value="beginner"
                                            changeHandler={filterChangeHandler}
                                            checked={filters.includes('beginner')}  
                                        />
                                    </li>
                                    <li className={styles.subMenuCheckbox}>
                                        <Checkbox
                                            label="Intermediate"
                                            value="intermediate"
                                            changeHandler={filterChangeHandler}
                                            checked={filters.includes('intermediate')}  
                                        />  
                                    </li>
                                    <li className={styles.subMenuCheckbox}>
                                        <Checkbox
                                            label="Advanced"
                                            value="advanced"
                                            changeHandler={filterChangeHandler}
                                            checked={filters.includes('advanced')}  
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.sort}>
                                <p className={styles.subMenuHeading}>Sort</p>
                                <ul className={styles.subMenu}>
                                    <li className={styles.subMenuItem}>
                                        <Radio
                                            label="Most Recent"
                                            value="most-recent"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-recent'}
                                            labelSize="medium"
                                            radioButtonSize="normal"
                                        />
                                    </li>
                                    <li className={styles.subMenuItem}>
                                        <Radio
                                            label="Most liked"
                                            value="most-liked"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-liked'}
                                            labelSize="medium"
                                            radioButtonSize="normal"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.projectMenuActions}>
                        <button className="button button-transparent button-border-dark button-border-thin" onClick={(e) => {e.stopPropagation(); outsideClickHandler(); }}>Cancel</button>
                        <button className="button button-primary" onClick={(event) => { applyCategoriesAndFilters(event); }}>Apply</button>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default ProjectsMenu;
