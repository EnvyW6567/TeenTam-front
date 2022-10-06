import React, { useState, useEffect, useContext } from 'react';
import { CRUD } from '../../app';
import CategoryList from '../CategoryList/CategoryList';
import PostList from '../PostList/PostList';
import styles from './Boards.module.css';

const Boards = (props) => {
    const crudService = useContext(CRUD)

    const [category, setCategory] = useState(1);
    const [postList, setPostList] = useState([]);
    const [postCount, setPostCount] = useState(0);

    const [order, setOrder] = useState("-pub_date");

    useEffect(() => {
        crudService.getPostList(category, order, setPostList, setPostCount);
    }, [crudService, category, order, setPostList, setPostCount])

    return(
        <section className={styles.boards_section}>
            <h1 className={styles.boards_section_title}>커뮤니티</h1>
            <CategoryList onSelect={setCategory}/>
            <PostList category={category} postCount={postCount} postList={postList} onSelect={setOrder} />
        </section>
    )
}

export default Boards;