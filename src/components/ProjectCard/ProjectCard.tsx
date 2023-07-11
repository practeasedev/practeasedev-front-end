import styles from "@/components/ProjectCard/ProjectCard.module.css";
import { FC } from "react";
import Image from "next/image";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import circleDesign from "@/assets/circle-design-element.svg";
import triangleDesign from "@/assets/triangle-design-element.svg";
import { useRouter } from "next/router";

interface IProjectCardProps {
  id: string;
  name: string;
  description: string;
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  image: string;
}

const ProjectCard: FC<IProjectCardProps> = (props) => {
  const { id, name, description, difficultyLevel, image } = props;
  console.log(name);
  const router = useRouter();

  const navigateToProject = () => {
    console.log(id);
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className={styles.projectCardOuterContainer}
      onClick={navigateToProject}
    >
      <div className={styles.projectCardInnerContainer}>
        <Image
          src={image}
          alt="An image of the project"
          width="1000"
          height="1000"
          className={styles.projectImage}
        />
        <div className={styles.projectCardContent}>
          <div className={styles.projectCardHead}>
            <p className={styles.projectName}>{name}</p>
            <ProjectLabel type={difficultyLevel} size="normal" />
          </div>
          <div className={styles.projectCardDesc}>{description}</div>
        </div>
      </div>
      <Image
        src={circleDesign}
        alt="A circle with light blue and light orange gradient"
        className={styles.circleDesign}
      />
      <Image
        src={triangleDesign}
        alt="A triangle with light blue and light orange gradient"
        className={styles.largeTriangleDesign}
      />
      <Image
        src={triangleDesign}
        alt="A triangle with light blue and light orange gradient"
        className={styles.smallTriangleDesign}
      />
    </div>
  );
};

export default ProjectCard;
