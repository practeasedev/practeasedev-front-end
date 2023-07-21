import { FC, useState, MouseEvent, useEffect, ChangeEvent, useRef } from "react";
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

    //states
    const [categories, setCategories] = useState<Array<string>>(["components","single-page","multi-page"]);
    const [filters, setFilters] = useState<Array<string>>([]);
    const [sort, setSort] = useState<string>("most-recent");
    const [selectedCategories, setSelectedCategories] = useState<Array<string>>([]);
    const [selectedFilters, setSelectedFilters] = useState<Array<string>>([]);

    //refs for the above states
    const categoriesRef = useRef(categories);
    const filtersRef = useRef(filters);
    const sortRef = useRef(sort);
    const selectedCategoriesRef = useRef(selectedCategories);
    const selectedFiltersRef = useRef(selectedFilters);


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
            setCategories((prevcategories) =>{
                const newCategories =  [...prevcategories, value];
                categoriesRef.current = newCategories;
                return newCategories;
            });
            setSelectedCategories((prevCategories) => {
               const newSelectedCategories =  [...prevCategories, value];
               selectedCategoriesRef.current = newSelectedCategories;
               return newSelectedCategories;
            });
        } else {
            setCategories((prevCategories) =>  {
                const newCategories = prevCategories.filter((category) => (category !== value));
                categoriesRef.current = newCategories;
                return newCategories;
            });
            setSelectedCategories((prevCategories) => {
                const newSelectedCategories = prevCategories.filter((category) => (category !== value));
                selectedCategoriesRef.current = newSelectedCategories;
                return newSelectedCategories;
            });
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
        if (checked) {
            setSort(value);
            sortRef.current = value;  
        }
    }

    const resetCategoriesAndFilters = () => {
        categoriesRef.current = categoriesRef.current.filter((category) => !selectedCategoriesRef.current.includes(category));
        filtersRef.current = filtersRef.current.filter((filter) => !selectedFiltersRef.current.includes(filter));
        setCategories(categoriesRef.current);
        setFilters(filtersRef.current);
        selectedCategoriesRef.current = [];
        selectedFiltersRef.current = [];
        setSelectedCategories(selectedCategoriesRef.current);
        setSelectedFilters(selectedFiltersRef.current);
    }

     
    const applyCategoriesAndFilters = (event:MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        const body:any ={
            categories:categories,
            filters:filters,
            sort: sort
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
                                            label="Most Recent"
                                            value="most-recent"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-recent'}
                                        />
                                    </li>
                                    <li className={styles.subMenuItem}>
                                        <Radio
                                            label="Most liked"
                                            value="most-liked"
                                            changeHandler={sortChangeHandler} 
                                            name="sort-group"
                                            checked={sort === 'most-liked'}
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
