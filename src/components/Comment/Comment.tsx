import { FC } from "react";
import styles from "@/components/Comment/Comment.module.css";
import Image from "next/image";
import { ICommentDetails } from "@/common/Types";
import { getFormattedDate } from "@/common/Helper";

interface IComment {
  commentDetails: ICommentDetails;
}

const Comment: FC<IComment> = ({ commentDetails }: IComment) => {
  const { user_name, user_avatar_url, comment, modified_on } = commentDetails;
  return (
    <div className={styles.commentContainer}>
      <div className={styles.userInfo}>
        <Image
          width="50"
          height="50"
          src={user_avatar_url}
          alt="A user profile picture"
          className={styles.userPic}
        />
        <div className={styles.userDetails}>
          <p className={styles.userName}>{user_name}</p>
          <p className={styles.commentDate}>{getFormattedDate(modified_on)}</p>
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default Comment;
