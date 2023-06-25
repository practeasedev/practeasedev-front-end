import styles from '@/components/ProjectCard/ProjectCard.module.css';
import { FC } from 'react';
import Image from 'next/image';
import ProjectLabel from '../ProjectLabel/ProjectLabel';
import circleDesign from '@/assets/circle-design-element.svg';
import triangleDesign from '@/assets/triangle-design-element.svg';

const ProjectCard:FC<{}> = () => {
    return (
        <div className={styles.projectCardOuterContainer}>
            <div className={styles.projectCardInnerContainer}>
                <Image src="https://images.unsplash.com/photo-1426024120108-99cc76989c71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="An image of the project" width="1000" height="1000" className={styles.projectImage}/>
                <div className={styles.projectCardContent}>
                    <div className={styles.projectCardHead}>
                        <p className={styles.projectName}>Grid</p>
                        <ProjectLabel type="beginner" size="normal"/>
                    </div>
                    <div className={styles.projectCardDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur.
                    </div>
                </div>
            </div>
            <Image src={circleDesign} alt="A circle with light blue and light orange gradient" className={styles.circleDesign}/>
            <Image src={triangleDesign} alt="A triangle with light blue and light orange gradient" className={styles.largeTriangleDesign}/>
            <Image src={triangleDesign} alt="A triangle with light blue and light orange gradient" className={styles.smallTriangleDesign}/>
        </div>
    );
}

export default ProjectCard;