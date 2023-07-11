import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";
import styles from "@/styles/projects.module.css";
import { FC, useEffect, useState } from "react";
import * as api from "@/common/HttpService";
import { GET_ALL_PROJECTS } from "@/common/APIPaths";
import Loader from "@/components/Loader/Loader";
import { NextRouter, useRouter } from "next/router";
import { CATEGORIES } from "@/common/Constants";

const Project: FC<{}> = () => {
  const router: NextRouter = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Array<any>>([]);
  useEffect(() => {
    if (router.isReady) {
      api
        .post({
          url: `${GET_ALL_PROJECTS}`,
          loadingHandler: setIsLoading,
          body: {},
        })
        .then((res) => {
          if (res.success) {
            console.log(res.data);
            setProjects(res.data);
          }
        });
    }
  }, [router.isReady]);
  return (
    <main className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsCategory}>Components</h1>
        <ProjectsMenu />
      </div>
      {isLoading ? (
        <Loader loadingText="Loading Projects" />
      ) : (
        <div className={styles.projects}>
          {projects.length === 0 ? (
            <p className={styles.noProjects}>No projects exists</p>
          ) : (
            projects.map(
              ({
                _id,
                project_name,
                project_description,
                difficulty_level,
                project_image,
              }) => (
                <ProjectCard
                  key={_id}
                  id={_id}
                  name={project_name}
                  description={project_description}
                  difficultyLevel={difficulty_level}
                  image={project_image}
                />
              )
            )
          )}
        </div>
      )}
    </main>
  );
};

export default Project;
