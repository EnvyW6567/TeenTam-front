import React from 'react';
import styles from './CategoryList.module.css';

const CategoryList = ({ onSelect }) => {
    const handleSelectCategory = (e) => {
        if(e.target.tagName === "LI"){
            for(const li of e.target.parentNode.children){
                li.classList.remove(styles.selected_category);
            }
            e.target.classList.add(styles.selected_category);
            onSelect(parseInt(e.target.dataset.value));
        }
    }

    return(
        <ul className={styles.category_list} onClick={handleSelectCategory} >
            <li className={`${styles.category} ${styles.selected_category}`} data-value="1">전체</li>
            <li className={styles.category} data-value="2">아이돌</li>
            <li className={styles.category} data-value="3">친구</li>
            <li className={styles.category} data-value="4">가족</li>
            <li className={styles.category} data-value="5">썸/연애</li>
            <li className={styles.category} data-value="6">학교</li>
            <li className={styles.category} data-value="7">진로</li>
            <li className={styles.category} data-value="8">스타일</li>
            <li className={styles.category} data-value="9">공지사항</li>
        </ul>
    )
}

export default CategoryList;