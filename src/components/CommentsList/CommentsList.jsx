import React from 'react';
import Comment from '../Comment/Comment';
import styles from './CommentsList.module.css';

const CommentsList = ({ commentsList }) => {
    return(
        <section className={styles.comments_list_section}>
            <h1 className={styles.comments_info}>댓글 {commentsList.length}개</h1>
            <div className={styles.comments_list}>
            {
                commentsList.map(comment => {
                    return <Comment key={comment.id} comment={comment} />
                })
            }
            </div>
        </section>
    )
}

export default CommentsList;