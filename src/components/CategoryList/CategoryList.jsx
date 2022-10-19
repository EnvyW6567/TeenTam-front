import React from 'react';
import styles from './CategoryList.module.css';

const CATEGORY_NAME = [
    "전체",
    "아이돌",
    "친구",
    "가족",
    "썸/연애",
    "학교",
    "진로",
    "스타일",
    "공지사항",
]

const CategoryList = ({category, setCategory, setFirstPage, setPage }) => {
    const handleSelectCategory = (e) => {
        if(e.target.tagName === "LI"){
            setCategory(parseInt(e.target.dataset.value));
            setFirstPage(1);
            setPage(1);
        }
    }

    return(
        <ul className={styles.category_list} onClick={handleSelectCategory} >
            {
                CATEGORY_NAME.map((name, index) => {
                    const className=`${styles.category} ${index === category && styles.selected_category}`;
                    return <li key={index} className={className} data-value={`${index}`}>{name}</li>;
                })
            }
        </ul>
    )
}

export default CategoryList;