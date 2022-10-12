import React from 'react';
import { Link } from 'react-router-dom';
import { getElapsedTime } from '../../services/times';
import { AiOutlineEye } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import styles from './PostCard.module.css';

// 댓글 개수도 가져올 수 있어야 함!

const CATEGORY_NAME = {
    1: "전체",
    2: "아이돌",
    3: "친구",
    4: "가족",
    5: "썸/연애",
    6: "학교",
    7: "진로",
    8: "스타일",
    9: "공지사항",
}

const PostCard = ({ category, post }) => {
    return(
        <Link to={`/boards/${category}/id/${post.id}/`} className={styles.post_card}>
            <div className={styles.related_categories}>
                <div className={styles.category_box}>{CATEGORY_NAME[category]}</div>
            </div>
            <h2 className={styles.post_title}>{post.title}</h2>
            <p className={styles.post_content}>{post.content}</p>
            <div className={styles.post_info}>
                <span className={styles.writer_info}>
                    <span className={styles.post_writer_icon}></span>
                    <span className={styles.post_writer}>{post.username}</span>
                </span>
                <span className={styles.post_pub_date}>{getElapsedTime(post.pub_date)}</span>
                <span className={styles.count_info}>
                    <span className={styles.view_info}>
                        <AiOutlineEye className={styles.view_icon} />
                        <span className={styles.view_count}>{post.hit}</span>
                    </span>
                    <span className={styles.like_info}>
                        <BiLike className={styles.like_icon} />
                        <span className={styles.like_count}>{post.like}</span>
                    </span>
                    <span className={styles.comment_info}>
                        <BsChatDots className={styles.comment_icon} />
                        <span className={styles.comment_count}>{post.comments_num}</span>
                    </span>
                </span>
            </div>
        </Link>
    )
}

export default PostCard;