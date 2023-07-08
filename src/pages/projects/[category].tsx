import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectsMenu from '@/components/ProjectsMenu/ProjectsMenu';
import styles from '@/styles/projects.module.css';
import { FC, useEffect, useState } from 'react';
import * as api from '@/common/HttpService';
import { GET_ALL_PROJECTS } from '@/common/APIPaths';
import Loader from '@/components/Loader/Loader';
import { NextRouter, useRouter } from 'next/router';

const Project:FC<{}> = () => {
    const router:NextRouter = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [projects, setProjects] = useState<Array<any>>([]);
    useEffect(() => {
        if(router.isReady) {
            const {category} = router.query
            api.get({url: `${GET_ALL_PROJECTS}/${category}`, loadingHandler:setIsLoading}).then((res) => {
                if(res.success) {
                    setProjects(res.data);
                }
            })
        }
    },[router.isReady]);
    return (
        <main className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
                <h1 className={styles.projectsCategory}>Components</h1>
                <ProjectsMenu />
            </div>
            {isLoading ? (
                <div className={styles.loadingText}>
                    <Loader />
                    <p>Loading Projects</p>  
                </div>
            ) : (
                <div className={styles.projects}>
                    {(projects.length === 0) ? (
                        <p className={styles.noProjects}>No projects exists</p>
                    ) : (
                        projects.map((project) => (
                            <ProjectCard
                                name={project.project_name}
                                description={project.project_description}
                                difficultyLevel={project.difficulty_level}
                                image={project.project_image} 
                            />
                        ))
                    )}
                </div>
            )}
        </main>
    );
}

export default Project;