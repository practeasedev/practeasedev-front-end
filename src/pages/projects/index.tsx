import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ProjectsMenu from "@/components/ProjectsMenu/ProjectsMenu";
import styles from "@/styles/projects.module.css";
import { FC, useEffect, useState } from "react";
import * as api from "@/common/HttpService";
import { GET_ALL_PROJECTS } from "@/common/APIPaths";
import Loader from "@/components/Loader/Loader";
import { useInView } from "react-intersection-observer";
import { INTERSECTION_OBSERVER_OPTIONS } from "@/common/Constants";
import { GetServerSideProps } from "next";
import Head from "next/head";

interface Props {
  data: any;
  success: boolean;
  message: string;
}

interface ProjectsProps {
  data: any;
  success: boolean;
  message: string;
}

const Project: FC<ProjectsProps> = (props) => {
  const { data, success } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Array<any>>([]);

  // animations ref
  const [projectsHeaderRef, projectsHeaderInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );

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
  };

  useEffect(() => {
    if (success) {
      setProjects(data);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Here is a list of handpicked web dev projects which will help you reiterate through all the essential concepts in webdevelopment."
        />
        <meta
          name="keywords"
          content="practice projects for web development,web development projects,practease dev,practeasedev projects"
        />
      </Head>
      <main className={styles.projectsContainer}>
        <div
          className={`${styles.projectsHeader} ${
            projectsHeaderInView ? "fadeIn" : ""
          }`}
          ref={projectsHeaderRef}
        >
          <h1 className={styles.projectsCategory}>Projects</h1>
          <ProjectsMenu getProjects={getProjects} />
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
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { data, success, message } = await api.post({
    url: `${GET_ALL_PROJECTS}`,
    body: {
      categories: ["components", "single-page", "multi-page"],
      filters: [],
      sort: "most-recent",
    },
  });

  return {
    props: {
      data: data || null,
      success: success || null,
      message: message || null,
    },
  };
};

export default Project;
