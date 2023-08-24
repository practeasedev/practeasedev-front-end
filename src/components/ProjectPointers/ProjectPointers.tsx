import { FC } from "react";
import styles from "@/components/ProjectPointers/ProjectPointers.module.css";
import SVG from "../SVG/SVG";

interface IProjectPointers {
  titleIcon?: string;
  backgroundColor?: string;
  title: string;
  pointers: string[];
}

const DEFUALT_BACKGROUND_COLOR = "#FFFFFF";

const ProjectPointers: FC<IProjectPointers> = (props) => {
  const { titleIcon, backgroundColor, title, pointers } = props;
  return (
    <div
      className={styles.pointersContainer}
      style={{
        backgroundColor: backgroundColor || DEFUALT_BACKGROUND_COLOR,
      }}
    >
      <p className={styles.pointersTitle}>
        {titleIcon ? <SVG iconName={titleIcon} /> : null}
        <span>{title}</span>
      </p>
      <ul className={styles.pointersList}>
        {pointers?.map((point) => (
          <li className={styles.pointer}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPointers;
