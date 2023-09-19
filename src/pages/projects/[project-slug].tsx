import { FC, useEffect, useMemo, useState } from "react";
import styles from "@/styles/project.module.css";
import ProjectLabel from "@/components/ProjectLabel/ProjectLabel";
import Image from "next/image";
import SVG from "@/components/SVG/SVG";
import ProjectPointers from "@/components/ProjectPointers/ProjectPointers";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";
import * as API from "@/common/HttpService";
import {
  DOWNLOAD_PROJECT,
  GET_ALL_PROJECTS,
  GET_PROJECT_STATUS,
  POST_PROJECT_STATUS,
} from "@/common/APIPaths";
import { IProjectDetails } from "@/common/Types";
import { checkIfLoggedIn, formatProjectDetails } from "@/common/Helper";
import { toast } from "react-hot-toast";
import CommentsSection from "@/components/CommentsSection/commentsSection";
import { useInView } from "react-intersection-observer";
import { INTERSECTION_OBSERVER_OPTIONS } from "@/common/Constants";
import Link from "next/link";
import { GetServerSideProps } from "next";

enum TAB_IDS {
  USER_STORIES = "USER_STORIES",
  COMMENTS = "COMMENTS",
  SOLUTIONS = "SOLUTIONS",
}

const TABS = [
  { id: TAB_IDS.USER_STORIES, label: "User Stories" },
  { id: TAB_IDS.COMMENTS, label: "Comments" },
  // { id: TAB_IDS.SOLUTIONS, label: "Solutions" },
];

interface IGetTabContents {
  tab: TAB_IDS;
  keyConcepts: string[];
  userStories: string[];
  resourceLinks: string[];
}

interface Props {
  data: any,
  success: boolean,
  message: string
}

interface ProjectProps {
  data: any,
  success: boolean,
  message: string
}

const Project: FC<ProjectProps> = (props) => {
  const router = useRouter();
  const isUserLoggedIn = useMemo(() => checkIfLoggedIn(), []);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<TAB_IDS>(TAB_IDS.USER_STORIES);
  const [isLiked, setLike] = useState<boolean>(false);
  const [projectDetails, setProjectDetails] = useState<IProjectDetails>(() =>
    formatProjectDetails({})
  );
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // animation refs
  const [projectHeaderRef, projectHeaderInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );
  const [projectImageRef, projectImageInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );
  const [projectInfoRef, projectInfoInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );
  const [projectExtraDetailsRef, projectExtraDetailsInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );
  const [projectPointersRef, projectPointersInView] = useInView(
    INTERSECTION_OBSERVER_OPTIONS
  );

  const handleLikeClick = async () => {
    if (!isUserLoggedIn) return;
    const { data, success } = await API.post({
      url: `${POST_PROJECT_STATUS}/${projectId}`,
      body: { isLike: !isLiked },
    });
    if (success) {
      setLike(data.is_liked);
      setProjectDetails((prevState) => ({
        ...prevState,
        likes: isLiked ? prevState.likes - 1 : prevState.likes + 1,
      }));
    } else toast.error("Please try again", { duration: 2000 });
  };

  const getTabContents = ({
    tab,
    keyConcepts,
    userStories,
    resourceLinks,
  }: IGetTabContents) => {
    switch (tab) {
      case TAB_IDS.USER_STORIES:
        return (
          <div
            className={`${styles.projectPointers} ${
              projectPointersInView ? "fadeIn" : ""
            }`}
            ref={projectPointersRef}
          >
            <ProjectPointers titleIcon="book" title="User Stories" pointers={userStories} />
            <div className={styles.conceptsAndResources}>
              <ProjectPointers
                titleIcon="bulb"
                title="Key Concepts"
                backgroundColor="#FFF8F2"
                pointers={keyConcepts}
              />
              {/* <ProjectPointers
                titleIcon="page"
                title="Resources"
                backgroundColor="#F5FAFF"
                pointers={resourceLinks}
              /> */}
            </div>
          </div>
        );
      case TAB_IDS.COMMENTS:
        return <CommentsSection projectId={projectId} />;
      default:
        <></>;
    }
  };

  const downloadAssets = () => {
    API.get({
      url: `${DOWNLOAD_PROJECT}/${slug}`,
      isDownload: true,
    }).then((res) => {
      if (res) {
        const url = URL.createObjectURL(res);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${slug}.zip`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const {
    projectId,
    projectName,
    projectDescription,
    projectCategory,
    difficultyLevel,
    projectImage,
    likes,
    keyConcepts,
    userStories,
    resourceLinks,
    projectFigmaLink,
    slug,
  } = props.data;

  const tabContents = useMemo(()=>getTabContents({
    tab: activeTab,
    keyConcepts,
    userStories,
    resourceLinks,
  }),[keyConcepts, userStories, resourceLinks, activeTab])

  return (
    <div className={styles.projectContainer}>
      <div
        className={`${styles.projectHeader} ${
          projectHeaderInView ? "fadeIn" : ""
        }`}
        ref={projectHeaderRef}
      >
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
          <div
            onClick={handleLikeClick}
            title={(isUserLoggedIn && isMounted) ? "" : "Please login to like"}
            className={styles.heartContainer}
          >
            <SVG
              iconName={(isLiked && isMounted) ? "heart" : "no-fill-heart"}
              fill="#FF4033"
              className={`${(isUserLoggedIn && isMounted) ? styles.heartIcon : ""}`}
            />
          </div>
        </div>
      </div>
      <div className={styles.projectDetails}>
        <Image
          className={`${styles.projectImage} ${
            projectImageInView ? "fadeInFromLeft" : ""
          }`}
          src={projectImage}
          alt={`Banner for ${projectName}`}
          width="1920"
          height="1080"
          ref={projectImageRef}
        />
        <div
          className={`${styles.projectInfo} ${
            projectInfoInView ? "fadeInFromRight" : ""
          }`}
          ref={projectInfoRef}
        >
          <div className={styles.projectDesc}>{projectDescription}</div>
          <div className={styles.projectActions}>
            <button
              title={
                isUserLoggedIn ? "" : "Please login to download assets"
              }
              className="button button-with-icon button-transparent button-border-primary button-border-medium"
              onClick={() => downloadAssets()}
            >
              <SVG iconName="download" fill="#0071DA" />
              <span>Download Assets</span>
            </button>
            <Link href={projectFigmaLink} target="_blank" className={styles.figmaLink}>
              <button className="button button-with-icon button-transparent button-border-dark button-border-medium">
                <SVG iconName="figma" />
                <span>View Figma</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${styles.projectExtraDetails} ${
          projectExtraDetailsInView ? "fadeIn" : ""
        }`}
        ref={projectExtraDetailsRef}
      >
        <div className={`${styles.tabsContainer}`}>
          {TABS.map(({ id, label }) => (
            <div
              className={`${styles.tab} ${
                activeTab === id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(id)}
              key={id}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
      {tabContents}
    </div>
  );
};

export const getServerSideProps:GetServerSideProps<Props> = async (context) => {
  const projectSlug:string = (context.params && context.params ['project-slug'])? context.params['project-slug']  as string : '';

  if(!projectSlug) {
    return {
      notFound: true
    }
  }

  const { data, success, message } = await API.get({
    url: `${GET_ALL_PROJECTS}/${projectSlug}`,
  });

  if(success && Object.keys(data).length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: formatProjectDetails(data),
      success: success,
      message: message
    }
  }
} 

export default Project;
