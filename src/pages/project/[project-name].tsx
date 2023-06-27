import {FC} from 'react';
import styles from '@/styles/project.module.css';
import ProjectLabel from '@/components/ProjectLabel/ProjectLabel';
import Image from 'next/image';

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
                    <p>Likes</p>
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
                            <span>Download Assets</span>
                        </button>
                        <button className='button button-with-icon button-transparent-dark'>
                            <span>View Figma</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.projectPointers}>
                <div className={styles.pointersContainer}>
                    <p className={styles.pointersTitle}>
                        <span>User Stories</span>
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
                <div className={styles.conceptsAndResources}>
                    <div className={styles.pointersContainer}>
                        <p className={styles.pointersTitle}>
                            <span>Key Concepts</span>
                        </p>
                        <ul className={styles.pointersList}>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>                        
                        </ul>
                    </div>
                    <div className={styles.pointersContainer}>
                        <p className={styles.pointersTitle}>
                            <span>Resource Links</span>
                        </p>
                        <ul className={styles.pointersList}>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>
                            <li className={styles.pointer}> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Project;