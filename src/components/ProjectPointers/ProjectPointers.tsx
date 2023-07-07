import {FC} from 'react';
import styles from '@/components/ProjectPointers/ProjectPointers.module.css';
import SVG from '../SVG/SVG';

interface IProjectPointers {
    titleIcon?: string
    backgroundColor?: string
    title: string
}

const DEFUALT_BACKGROUND_COLOR = "#FFFFFF";

const ProjectPointers:FC<IProjectPointers> = (props) => {
    const {titleIcon, backgroundColor, title} = props;
    return (
        <div className={styles.pointersContainer} style={{
            backgroundColor: backgroundColor || DEFUALT_BACKGROUND_COLOR
        }}>
            <p className={styles.pointersTitle}>
                {titleIcon ? <SVG iconName={titleIcon}/> : null}
                <span>{title}</span>
            </p>
            <ul className={styles.pointersList}>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>                        
            </ul>
    </div>
    );
};

export default ProjectPointers;