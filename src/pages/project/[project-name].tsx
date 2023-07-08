import {FC} from 'react';
import styles from '@/styles/project.module.css';
import ProjectLabel from '@/components/ProjectLabel/ProjectLabel';
import Image from 'next/image';
import SVG from '@/components/SVG/SVG';
import Comment from '@/components/Comment/Comment';
import ProjectPointers from '@/components/ProjectPointers/ProjectPointers';



const Project:FC<{}> = () => {
    return (
        <main className={styles.projectContainer}>
            <div className={styles.projectHeader}>
                <div className={styles.headerLeft}>
                    <span className={styles.projectCategory}>Components /</span>
                    <div className={styles.projectTitle}>
                        <h1 className={styles.projectName}>Image Gallery</h1>
                        <ProjectLabel type="beginner" size="normal"/>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.likeCount}>20</p>
                    <SVG iconName='heart' fill='#FF4033' className={styles.heartIcon}/>
                </div>
            </div>
            <div className={styles.projectDetails}>
                <Image className={styles.projectImage} src="https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=918&q=80" alt="an image of an image gallery page" width="1920" height="1080" />
                <div className={styles.projectInfo}>
                    <div className={styles.projectDesc}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. 
                    </div>
                    <div className={styles.projectActions}>
                        <button className="button button-with-icon button-transparent-primary">
                            <SVG iconName="download" fill="#0071DA"/>
                            <span>Download Assets</span>
                        </button>
                        <button className='button button-with-icon button-transparent-dark'>
                            <SVG iconName="figma"/>
                            <span>View Figma</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.projectPointers}>
                <ProjectPointers titleIcon="book" title="User Stories" />
                <div className={styles.conceptsAndResources}>
                    <ProjectPointers titleIcon="bulb" title="Key Concepts" backgroundColor="#FFF8F2"/>
                    <ProjectPointers titleIcon="page" title="Resources" backgroundColor="#F5FAFF"/>
                </div>
            </div>
            <div className={styles.commentsContainer}>
                <div className={styles.commentsTitle}>
                    <SVG iconName='comment' />
                    <p>Comments</p>
                </div>
                <div className={styles.commentInputContainer}>
                    <textarea placeholder='Your comment here...' className={styles.commentInput}></textarea>
                    <button className={`${styles.commentBtn} button-primary`}>Comment</button>
                </div>
                <div className={styles.comments}>
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        </main>
    );
}

export default Project;