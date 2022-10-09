import React, { useState, useContext } from 'react';
import { BiCommentDots, BiLike } from "react-icons/bi";
import { CRUD } from '../../app';
import { getElapsedTime } from '../../services/times';
import styles from './PostContent.module.css';

const PostContent = ({post, setPost}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const crudService = useContext(CRUD);

    const handleClickLike = () => {
        crudService.updatePostLike(user.id, post.boards_id, setPost);
    }

    return(
        <section className={styles.post_content_section}>
            <h1 className={styles.post_title}>{post?.title}</h1>
            <div className={styles.post_info}>
                <span className={styles.post_writer_icon}></span>
                <span className={styles.post_writer}>{post?.writer_username}</span>
                <span className={styles.post_pub_date}>{getElapsedTime(post?.pub_date)}</span>
                <span className={styles.like_info}>
                    <BiLike className={styles.like_icon} />
                    <span className={styles.like_count}>{post?.like}</span>
                </span>
                <span className={styles.comment_info}>
                    <BiCommentDots className={styles.comment_icon} />
                    <span className={styles.comment_count}>{post?.comments_num}</span>
                </span>
            </div>
            <div className={styles.empty_box}></div>
            <pre className={styles.post_content}>{post?.content}</pre>
            <button className={styles.like_button} onClick={handleClickLike} >
                <BiLike className={styles.like_icon} /> &nbsp;공감
            </button>
        </section>
    )
}

export default PostContent;