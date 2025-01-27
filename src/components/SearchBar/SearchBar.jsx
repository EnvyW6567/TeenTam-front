import React, { useRef } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';

// 검색창 컴포넌트
// 엔터 버튼 누르면 검색결과 페이지로 연결되게끔 이벤트 핸들러 추가해야 함
// navbar안에 위치할 경우 사이즈 조정에 대한 작업도 필요

const SearchBar = ({isInMainPage}) => {
    const keywordRef = useRef();
    const navigate = useNavigate();

    const handleKeyDownEnter = (e) => {
        if (e.key !== "Enter") {
            return;
        }

        let keyword = keywordRef.current.value;
        
        if (!keyword) {
            alert("검색할 단어를 입력해주세요");
            return;
        }

        keyword = keyword.replaceAll(" ", "+");
        navigate(`/boards/search?keyword=${keyword}`);
    }

    return(
        <div className={`${styles.search_bar} ${isInMainPage?styles.in_main:styles.not_in_main}`}>
            <IoSearch className={styles.search_icon}/>
            <input 
                onKeyDown={handleKeyDownEnter}
                className={styles.search} 
                placeholder='궁금한 토픽을 검색해보세요'
                type="text" 
                name='query'
                ref={keywordRef}
            />
        </div>
    )
}

export default SearchBar;