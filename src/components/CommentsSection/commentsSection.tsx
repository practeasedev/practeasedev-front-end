import Comment from "../Comment/Comment";
import SVG from "../SVG/SVG";
import styles from "./commentsSection.module.css";

const CommentsSection = () => {
  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsTitle}>
        <SVG iconName="comment" />
        <p>Comments</p>
      </div>
      <div className={styles.commentInputContainer}>
        <textarea
          placeholder="Your comment here..."
          className={styles.commentInput}
        ></textarea>
        <button className={`${styles.commentBtn} button-primary`}>
          Comments
        </button>
      </div>
      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default CommentsSection;
