import { FC, ReactNode } from "react";
import styles from "@/components/ProjectPointers/ProjectPointers.module.css";
import SVG from "../SVG/SVG";

interface ILinkItem{
  title: string;
  link: string;
}

interface IProjectPointers {
  titleIcon?: string;
  backgroundColor?: string;
  title: string;
  pointers: string[] | ILinkItem[];
  isLinks?: boolean;
}

const DEFUALT_BACKGROUND_COLOR = "#FFFFFF";

const ProjectPointers: FC<IProjectPointers> = (props) => {
  const {
    titleIcon,
    backgroundColor,
    title,
    pointers,
    isLinks = false,
  } = props;

  const getLinkItem = ({title, link}: ILinkItem): ReactNode => (
    <a target="_blank" href={link} className={styles.resourceLink}>
      <span>{title}</span>
      <SVG iconName="open-in-new"/>
    </a>
  )

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
        {pointers?.map((point, index) => (
          <li className={styles.pointer} key={`${title}${index}`}>
            {isLinks ? getLinkItem(point as ILinkItem) : String(point)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectPointers;
