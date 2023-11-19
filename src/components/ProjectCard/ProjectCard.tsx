import styles from "@/components/ProjectCard/ProjectCard.module.css";
import { FC } from "react";
import Image from "next/image";
import ProjectLabel from "../ProjectLabel/ProjectLabel";
import circleDesign from "@/assets/circle-design-element.svg";
import triangleDesign from "@/assets/triangle-design-element.svg";
import { useInView } from "react-intersection-observer";
import { INTERSECTION_OBSERVER_OPTIONS } from "@/common/Constants";
import Link from "next/link";

interface IProjectCardProps {
  slug: string;
  name: string;
  description: string;
  difficultyLevel: "beginner" | "intermediate" | "advanced";
  image: string;
}

const ProjectCard: FC<IProjectCardProps> = (props) => {
  const { slug, name, description, difficultyLevel, image } = props;

  const [projectCardRef, projectCardInView] = useInView(INTERSECTION_OBSERVER_OPTIONS);

  return (
    <Link href={`/projects/${slug}`} className={`${styles.projectCardOuterContainer} ${projectCardInView ? 'fadeInFromTop' : ''}`} ref={projectCardRef}>
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
    </Link>
  );
};

export default ProjectCard;
