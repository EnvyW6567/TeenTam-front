import React from 'react';
import { getElapsedTime } from '../../services/times';
import styles from './Comment.module.css';

const Comment = ({ comment }) => {
    return(
        <div className={styles.comment}>
            <div className={styles.comment_info}>
                <span className={styles.comment_writer}>{comment.username}</span>
                <span className={styles.comment_pub_date}>{getElapsedTime(comment.pub_date)}</span>
                <div className={styles.comment_writer_image}></div>
            </div>
            <pre className={styles.comment_content}>{comment.content}</pre>
        </div>
    )
}

export default Comment;