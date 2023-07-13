import { FC, useEffect, useState } from "react";
import styles from "@/styles/project.module.css";
import ProjectLabel from "@/components/ProjectLabel/ProjectLabel";
import Image from "next/image";
import SVG from "@/components/SVG/SVG";
import Comment from "@/components/Comment/Comment";
import ProjectPointers from "@/components/ProjectPointers/ProjectPointers";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";
import * as API from "@/common/HttpService";
import { GET_ALL_PROJECTS } from "@/common/APIPaths";
import { IProjectDetails } from "@/common/Types";
import { formatProjectDetails } from "@/common/Helper";
import { toast } from "react-hot-toast";
import CommentsSection from "@/components/CommentsSection/commentsSection";

enum TAB_IDS {
  USER_STORIES = "USER_STORIES",
  COMMENTS = "COMMENTS",
  SOLUTIONS = "SOLUTIONS",
}

const TABS = [
  { id: TAB_IDS.USER_STORIES, label: "User Stories" },
  { id: TAB_IDS.COMMENTS, label: "Comments" },
  { id: TAB_IDS.SOLUTIONS, label: "Solutions" },
];

const Project: FC<{}> = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TAB_IDS>(TAB_IDS.USER_STORIES);
  const [projectDetails, setProjectDetails] = useState<IProjectDetails>(() =>
    formatProjectDetails({})
  );

  useEffect(() => {
    if (router.isReady) getProjectDetails();
  }, [router.isReady]);

  const getProjectDetails = async () => {
    const projectSlug = router.query["project-slug"];
    const { data, success, message } = await API.get({
      url: `${GET_ALL_PROJECTS}/${projectSlug}`,
      loadingHandler: setLoading,
    });
    if (success) setProjectDetails(formatProjectDetails(data));
    else toast.success(message, { duration: 2000 });
    setLoading(false);
  };

  const getTabContents = (tab: TAB_IDS) => {
    switch (tab) {
      case TAB_IDS.USER_STORIES:
        return (
          <div className={styles.projectPointers}>
            <ProjectPointers titleIcon="book" title="User Stories" />
            <div className={styles.conceptsAndResources}>
              <ProjectPointers
                titleIcon="bulb"
                title="Key Concepts"
                backgroundColor="#FFF8F2"
              />
              <ProjectPointers
                titleIcon="page"
                title="Resources"
                backgroundColor="#F5FAFF"
              />
            </div>
          </div>
        );
      case TAB_IDS.COMMENTS:
        return <CommentsSection />;
      default:
        <></>;
    }
  };

  const {
    projectName,
    projectDescription,
    projectCategory,
    difficultyLevel,
    projectImage,
    likes,
    keyConcepts,
    userStories,
    resourceLinks,
  } = projectDetails;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <main className={styles.projectContainer}>
          <div className={styles.projectHeader}>
            <div className={styles.headerLeft}>
              <span
                className={styles.projectCategory}
              >{`${projectCategory} /`}</span>
              <div className={styles.projectTitle}>
                <h1 className={styles.projectName}>{projectName}</h1>
                <ProjectLabel type={difficultyLevel} size="normal" />
              </div>
            </div>
            <div className={styles.headerRight}>
              <p className={styles.likeCount}>{likes}</p>
              <SVG
                iconName="heart"
                fill="#FF4033"
                className={styles.heartIcon}
              />
            </div>
          </div>
          <div className={styles.projectDetails}>
            <Image
              className={styles.projectImage}
              src={projectImage}
              alt={`Banner for ${projectName}`}
              width="1920"
              height="1080"
            />
            <div className={styles.projectInfo}>
              <div className={styles.projectDesc}>{projectDescription}</div>
              <div className={styles.projectActions}>
                <button className="button button-with-icon button-transparent-primary">
                  <SVG iconName="download" fill="#0071DA" />
                  <span>Download Assets</span>
                </button>
                <button className="button button-with-icon button-transparent-dark">
                  <SVG iconName="figma" />
                  <span>View Figma</span>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.projectExtraDetails}>
            <div className={`${styles.tabsContainer}`}>
              {TABS.map(({ id, label }) => (
                <div
                  className={`${styles.tab} ${
                    activeTab === id ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(id)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          {getTabContents(activeTab)}
        </main>
      )}
    </div>
  );
};

export default Project;