import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import SVG from "../SVG/SVG";
import styles from "./commentsSection.module.css";
import * as API from "@/common/HttpService";
import { checkIfLoggedIn } from "@/common/Helper";
import { GET_COMMENTS, POST_COMMENT } from "@/common/APIPaths";
import { toast } from "react-hot-toast";
import { ICommentDetails } from "@/common/Types";
import { off } from "process";

const CommentsSection = ({ projectId }: { projectId: string }) => {
  const isUserLoggedIn = checkIfLoggedIn();
  const [offset, setOffset] = useState<number>(0);
  const [commentText, setCommentText] = useState<string>("");
  const [comments, setComments] = useState<ICommentDetails[]>([]);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);

  useEffect(() => {
    getComments();
  }, [offset]);

  const getComments = async () => {
    const { message, success, data } = await API.get({
      url: `${GET_COMMENTS}/${projectId}?offset=${offset}`,
    });
    if (!success) {
      toast.error(message, { duration: 2000 });
      return;
    }
    if (offset > 0 && data.length === 0) {
      toast.success("No more comments to load", { duration: 2000 });
      setShowLoadMore(false);
    }
    setComments((commentsArray) => [...commentsArray, ...data]);
  };

  const postComment = async () => {
    if (!commentText) {
      toast.error("Please enter comment to post", { duration: 2000 });
      return;
    }
    const { message, success, data } = await API.post({
      url: `${POST_COMMENT}/${projectId}`,
      body: { commentText },
    });
    if (success) {
      toast.success(message, { duration: 2000 });
      setComments((commentsArray) => [data, ...commentsArray]);
      setCommentText("");
    } else {
      toast.error(message, { duration: 2000 });
    }
  };

  return (
    <div className={styles.commentsContainer}>
      <div className={styles.commentsTitle}>
        <SVG iconName="comment" />
        <p>Comments</p>
      </div>
      <div className={styles.commentInputContainer}>
        <textarea
          placeholder="Your comment here..."
          value={commentText}
          className={styles.commentInput}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button
          className={`button-primary ${styles.commentBtn}`}
          onClick={postComment}
          title={isUserLoggedIn ? "" : "Please login to comment"}
          disabled={!isUserLoggedIn}
        >
          Post
        </button>
      </div>
      <div className={styles.comments}>
        {comments.map((comment) => (
          <Comment key={comment._id} commentDetails={comment} />
        ))}
      </div>
      {showLoadMore ? (
        <div
          className={styles.loadMoreContainer}
          onClick={() => setOffset((prevState) => prevState + 1)}
        >
          Load More
          <span>&#11163;</span>
        </div>
      ) : null}
    </div>
  );
};

export default CommentsSection;
