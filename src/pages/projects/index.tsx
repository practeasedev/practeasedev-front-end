import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";
import styles from "@/styles/projects.module.css";
import { FC, useEffect, useState } from "react";
import * as api from "@/common/HttpService";
import { GET_ALL_PROJECTS } from "@/common/APIPaths";
import Loader from "@/components/Loader/Loader";
import { NextRouter, useRouter } from "next/router";

const Project: FC<{}> = () => {
  const router: NextRouter = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Array<any>>([]);

  const getProjects = (body: any) => {
    api
      .post({
        url: `${GET_ALL_PROJECTS}`,
        loadingHandler: setIsLoading,
        body: body,
      })
      .then((res) => {
        if (res.success) {
          setProjects(res.data);
        }
      });
  }

  useEffect(() => {
    if (router.isReady) {
      getProjects({
        categories:["components","single-page","multi-page"],
        filters:[],
        sort: "most-recent"
      });
    }
  }, [router.isReady]);

  return (
    <main className={styles.projectsContainer}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsCategory}>Components</h1>
        <ProjectsMenu getProjects={getProjects}/>
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
                slug,
                project_name,
                project_description,
                difficulty_level,
                project_image,
              }) => (
                <ProjectCard
                  key={_id}
                  slug={slug}
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
