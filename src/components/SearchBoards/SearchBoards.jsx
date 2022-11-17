import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CRUD } from '../../app';
import QueryString from 'qs';
import PostList from '../PostList/PostList';
import styles from './SearchBoards.module.css';

// category : 카테고리
// postList : 포스트 목록
// postCount : 현재 카테고리에서 생성된 전체 포스트 개수
// firstPage : 페이지네이터에서 보이는 5개 버튼 중 제일 왼쪽 버튼의 페이지번호
//             -> 앞으로 페이지네이터에서 지금 보이는 페이지번호들을 한 뷰에 보이는 페이지들 이라고 정의하겠음
// page : 현재 보고 있는 페이지
const POSTS_PER_PAGE = 10;
const ORDER = "pub_date";

const SearchBoards = (props) => {
    const crudService = useContext(CRUD)
    const location = useLocation();
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
    const keyword = queryData.keyword;

    const [postList, setPostList] = useState([]);
    const [postCount, setPostCount] = useState(0);
    const [firstPage, setFirstPage] = useState(1);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
        setFirstPage(1);
    }, [keyword])

    useEffect(() => {
        crudService.getPostListBySearch(ORDER, page, POSTS_PER_PAGE, keyword, setPostList, setPostCount);
    }, [crudService, page, keyword, setPostList, setPostCount])

    return(
        <section className={styles.boards_section}>
            <h1 className={styles.boards_section_title}>"{keyword}"에 대한 검색 결과</h1>
            <PostList 
                firstPage={firstPage}
                postCount={postCount} 
                postList={postList} 
                setFirstPage={setFirstPage}
                setPage={setPage}
                keyword={keyword}
            />
        </section>
    )
}

export default SearchBoards;