import React, { useContext, useState } from 'react';
import { CRUD } from '../../app';
import { getElapsedTime } from '../../services/times';
import { BiTrashAlt } from "react-icons/bi";
import styles from './Comment.module.css';

const Comment = ({ comment }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const crudService = useContext(CRUD);

    const handleClickDelete = async () => {
        await crudService.deleteComment(user.id, comment.id);
    }

    return(
        <div className={styles.comment}>
            <div className={styles.comment_info}>
                <span className={styles.comment_writer}>{comment.username}</span>
                <span className={styles.comment_pub_date}>{getElapsedTime(comment.pub_date)}</span>
                { user.id === comment.comments_writer && (
                    <BiTrashAlt 
                        className={styles.comment_delete_button} 
                        onClick={handleClickDelete}
                        />)
                    }
                <div className={styles.comment_writer_image}></div>
            </div>
            <pre className={styles.comment_content}>{comment.content}</pre>
        </div>
    )
}

export default Comment;