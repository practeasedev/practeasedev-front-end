import styles from '@/components/ProjectLabel/ProjectLabel.module.css';
import { FC } from 'react';

interface IProjectLabelProps {
    type: "beginner" | "intermediate" | "advanced";
    size: "normal" | "medium";
}

const ProjectLabel:FC<IProjectLabelProps> = (props) => {
    const { type, size} = props;
    
    return (
        <p className={` ${styles[`${size}Label`]} ${styles.label} ${styles[`${type}Label`]} }`}>
            {type}
        </p>
    )
}

export default ProjectLabel;