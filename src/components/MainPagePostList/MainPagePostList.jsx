import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsChatDots } from "react-icons/bs";
import { CRUD } from '../../app';
import styles from './MainPagePostList.module.css';

const CATEGORY_NAME = {
    1: "아이돌🎙",
    2: "친구👭",
    3: "가족👪",
    4: "썸/연애💗",
    5: "학교🏫",
    6: "진로🔎",
    7: "스타일👖",
    8: "공지사항✔️",
}

const MainPagePostList = ({category}) => {
    const [postList, setPostList] = useState([]);
    const crudService = useContext(CRUD);

    useEffect(() => {
        const order = "pub_date";
        const page = 1;
        const offset = 5;
        crudService.getPostList(category, order, page, offset, setPostList);
    }, [category, crudService, setPostList])

    return(
        <>
            <div className={styles.board_header}>
                {CATEGORY_NAME[category]}
                <Link className={styles.go_more} to="/boards" state={{category}}>더보기 &#62;</Link>
            </div>
            <ul className={styles.board_body}>
                {
                    postList.map(post => {
                        return(
                            <li key={post.id}>
                                <Link to={`/boards/${category}/id/${post.id}/`} className={styles.board_content}>
                                    {post.title}
                                    <span className={styles.content_info}>
                                        <BsChatDots className={styles.comment_icon} />
                                        <span className={styles.comment_count}>{post.comments_num}</span>
                                    </span>
                                </Link>
                            </li>   
                        )
                    })
                }
            </ul>    
        </>
    )
}
        
export default MainPagePostList;