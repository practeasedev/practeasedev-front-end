import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectsMenu from '@/components/ProjectsMenu/ProjectsMenu';
import styles from '@/styles/projects.module.css';
import { FC } from 'react';

const Project:FC<{}> = () => {
    return (
        <main className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
                <h1 className={styles.projectsCategory}>Components</h1>
                <ProjectsMenu />
            </div>
            <div className={styles.projects}>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </main>
    );
}

export default Project;