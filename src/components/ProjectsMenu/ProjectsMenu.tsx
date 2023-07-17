import { FC, useState, MouseEvent, useEffect, ChangeEvent } from "react";
import styles from "@/components/ProjectsMenu/ProjectsMenu.module.css";
import Image from "next/image";
import horizantalEllipsis from "@/assets/horizantal-ellipsis.svg";
import Checkbox from "../Checkbox/Checkbox";
import Radio from "../Radio/Radio";

interface ProjectsMenuProps {
    getProjects: (body:any) => void
}

const ProjectsMenu: FC<ProjectsMenuProps> = (props) => {
    const [displayMenu, setDisplayMenu] = useState<boolean>(false);
    const [categories, setCategories] = useState<Array<string>>([]);
    const [filters, setFilters] = useState<Array<string>>([]);
    const [sort, setSort] = useState<string>("");
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);
    const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);
    const [selectedSort, setSelectedSort] = useState<string>("");
    const {getProjects} = props;

    const toggleMenuDisplay = (event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if(displayMenu) {
            resetCategoriesAndFilters();
        }
        setDisplayMenu((previousValue) => !previousValue);
        
    };

    const categoryChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;
        if(checked) {
            setCategories((prevcategories) => [...prevcategories, value]);
            setSelectedCategories((prevCategories) => ([...prevCategories, value]));
        } else {
            setCategories((prevCategories) =>  (prevCategories.filter((category) => (category !== value))));
            setSelectedCategories((prevCategories) => (prevCategories.filter((category) => (category !== value))));
        }
    }

    const filterChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target;

        if(checked) {
            setSelectedFilters((prevFilters) => ([...prevFilters, value]));
            setFilters((prevFilters) => ([...prevFilters, value]));
        } else {
            setSelectedFilters((prevFilters) => (prevFilters.filter((filter) => (filter !== value))));
            setFilters((prevFilters) => (prevFilters.filter((filter) => (filter !== value))));
        }
    }

    const sortChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target
        if(checked) {
            setSelectedSort(value);
            setSort(value);  
        } 
    }

    const resetCategoriesAndFilters = () => {
        console.log(selectedFilters);
        setFilters((prevFilters) => {
            console.log(prevFilters);
            const filters = prevFilters.filter((filter) => {
                console.log(selectedFilters);
                return !selectedFilters.includes(filter)
            })
            console.log(filters);
            return filters
        });
        setCategories((prevCategories) => ([...prevCategories.filter((category) => (!selectedCategories.includes(category)))]));
        // setSelectedCategories([]);
        // setSelectedFilters([]);
    }

     
    const applyCategoriesAndFilters = (event:MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        const body:any ={
            categories:categories,
            filters:filters
        };
        getProjects(body);
        setSelectedCategories([]);
        setSelectedFilters([]);
        setDisplayMenu(false); 
    }

    const outsideClickHandler = () => {
        resetCategoriesAndFilters();
        setDisplayMenu(false);
    }

    useEffect(() => {
        window.addEventListener("click", outsideClickHandler);
        return () => {
            window.removeEventListener('click', outsideClickHandler);
        }
    },[]);

    useEffect(() => {
        console.log(selectedFilters);
    }, [selectedFilters])
    return (
        <div className={styles.menuContainer}>
            <button
                className={`${styles.menuTrigger} button button-with-icon button-secondary-light button-medium`}
                onClick={toggleMenuDisplay}
            >
                <Image
                    src={horizantalEllipsis}
                    alt="A horizantal ellispis icon"
                    className={styles.horizantalEllipsis}
                />
                <span>Menu</span>
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
                                        label="All"
                                        value="all"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('all')} 
                                    />
                                </li>
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
                                    />
                                </li>
                                <li className={styles.subMenuItem}>
                                    <Checkbox
                                        label="Full Stack"
                                        value="full-stack"
                                        changeHandler={categoryChangeHandler}
                                        checked={categories.includes('full-stack')}  
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
                                            label="Most like"
                                            value="most-liked"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-liked'}
                                        />
                                    </li>
                                    <li className={styles.subMenuItem}>
                                    <Radio
                                            label="Most Recent"
                                            value="most-recent"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-recent'}
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button className="button button-primary" onClick={(event) => {applyCategoriesAndFilters(event)}}>Apply</button>
                </div>
            ) : null}
        </div>
    );
};

export default ProjectsMenu;
