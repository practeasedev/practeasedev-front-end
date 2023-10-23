import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import styles from './Solutions.module.css';
import { SOLUTION_FORM_LINKS, SOLUTION_PAGE_SIZE } from '@/common/Constants';
import { useForm } from '@/common/CustomHooks';
import Image from 'next/image';
import { checkIfLoggedIn, getLoggedInUserDetails } from '@/common/Helper';
import * as api from '@/common/HttpService';
import { GET_SOLUTIONS, POST_SOLUTION } from '@/common/APIPaths';
import Loader from '../Loader/Loader';
import { ISolution } from '@/common/Types';
import { toast } from 'react-hot-toast';

interface ISolutionsProps {
    projectId: string
}

const Solutions:FC<ISolutionsProps> = (props) => {
    const { projectId } = props;
    const { values, errors, setFormField, validateForm } = useForm(SOLUTION_FORM_LINKS);
    const [page, setPage] = useState<number>(0)
    const [loadingSolutions, setloadingSolutions] = useState<boolean>(false);
    const [postingSolution, setPostingSolution] = useState<boolean>(false);
    const [solutionExists, setSolutionExists] = useState<boolean>(false);
    const [showLoadMore, setShowLoadMore] = useState<boolean>(true);
    const [solutions, setSolutions] = useState<ISolution[]>([]);

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const isFormValid: boolean = validateForm();

        
        if (isFormValid) {
            const payload = {
                githubLink: values.githubLink,
                description: values.comments,
            }

            const url = `${POST_SOLUTION}/${projectId}`

            api.post({
                url,
                body: payload,
                loadingHandler: setPostingSolution,
            }).then((res) => {
                if (res.success) {
                    toast.success("Successfully submitted solution");
                    loadSolutions();
                }
            }); 
        }
    };

    const loadSolutions = () => {
        const offset = page * SOLUTION_PAGE_SIZE;
        const loggedInUserDetails = getLoggedInUserDetails();
        api.get({
            url:`${GET_SOLUTIONS}/${projectId}?offset=${offset}` ,
            loadingHandler: setloadingSolutions
        }).then((res) => {
            if(res.success) {
                setSolutions((prevSolutions:ISolution[]) => [...prevSolutions, ...res.data]);
                if(res.data.find((solution:ISolution) => solution.user_id === loggedInUserDetails?.userId)) {
                    setSolutionExists(true);
                }
                if(res.data && res.data.length < SOLUTION_PAGE_SIZE) {
                    setShowLoadMore(false);
                }
                if(res.data.length > 0) {
                    setPage((prevPage) => (prevPage + 1));
                }
            }
        });
    }
    
    useEffect(() => {
        loadSolutions();
    }, [])
    return (
        <>
            <p className={styles.infoForUser}>  Solutions can only be submitted in desktop mode of the website.</p>
            {(checkIfLoggedIn() && !solutionExists) ? (
                <div className={styles.solutionsFormAndTips}>
                    <form className={styles.solutionsForm} onSubmit={(event) => { submitForm(event); }}>
                        <div className="input-group">
                            <label htmlFor="solution-link" className="input-label">
                                Solution Link
                            </label>
                            <input
                                className="input"
                                id="githubLink"
                                name="githubLink"
                                value={values.githubLink}
                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    setFormField(event, "githubLink", "text")
                                }
                            />
                            {errors.githubLink? (
                                <p className="form-field-error">{errors.githubLink}</p>
                            ) : null}
                        </div>
                        <div className="input-group">
                            <label htmlFor="comments" className="input-label">
                                Comments
                            </label>
                            <textarea
                                className="textarea"
                                id="comments"
                                name="comments"
                                value={values.comments}
                                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                                    setFormField(event, "comments", "text")
                                }
                            ></textarea>
                            {errors.comments ? (
                                <p className="form-field-error">{errors.comments}</p>
                            ) : null}
                        </div>
                        <button
                            className="button button-primary button-medium"
                            type="submit"
                            disabled={postingSolution}
                        >
                            {postingSolution ?  'Submitting solution...' : 'Submit your solution'}
                        </button>
                    </form>
                    <div className={styles.tipsContainer}>
                        <div className={styles.tips}>
                            <h4>Tips</h4>
                            <ol className={styles.tipsList}>
                                <li>Create a repo of your solution in github</li>
                                <li>Try and describe your solution or any challenges you faced while creating the projects as it helps other people better understand you solution and learn new things about web development.</li>
                                <li>If possible try and help other people by giving feed backs to their solutions.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            ) : null}
            {loadingSolutions ? <Loader loadingText='Loading solutions'/> : (
                solutions.length === 0 ? (
                    <div className={styles.noSolutions}>
                        <p className={styles.noSolutionSymbol}>{`:-)`}</p>
                        <p className={styles.noSolutionText}>No Solutions added yet. Be the first </p>
                    </div>
                ) : (
                    <div className={styles.solutionsContainer}>
                        <div className={styles.solutions}>
                            { solutions.map((solution:ISolution) => (
                                <div className={styles.solution}>
                                    <div className={styles.solutionAuthor}>
                                        <Image
                                            width="500"
                                            height="500"
                                            src={solution.avatar_url}
                                            alt="solution authors image"
                                            className={styles.authorImage}
                                        />
                                        <p className={styles.authorDetails}>
                                            <span className={styles.solutionBy}>Solution by</span>
                                            <span className={styles.authorName}>{solution.userName}</span>
                                        </p>
                                    </div>
                                    <div className={styles.authorComment}>
                                        {solution.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {showLoadMore ? (
                            <button
                                type="button"
                                className={`button button-transparent button-border-dark button-border-medium ${styles.loadMoreBtn}`}
                                onClick={()=> {loadSolutions()}}
                            >
                                Load More Solutions
                            </button>
                        ) : null}
                    </div>
                )
            )}
        </>
    )
};

export default Solutions;   