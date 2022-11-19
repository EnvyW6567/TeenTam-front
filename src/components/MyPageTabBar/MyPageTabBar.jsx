import React from 'react';
import styles from './MyPageTabBar.module.css';

const removeStyleFromButton = (target) => {
    for(const li of target.parentNode.children){
        li.classList.remove(styles.current_tab);
    }
}
const addStyleToButton = (target) => {
    removeStyleFromButton(target);
    target.classList.add(styles.current_tab);
}

const MyPageTabBar = ({ setTabMenu }) => {
    const handleClickTabMenu = (e) => {
        if(e.target.tagName === "LI"){
            setTabMenu((e.target.dataset.value));
            removeStyleFromButton(e.target);
            addStyleToButton(e.target);
        }
    }

    return(
        <ul className={styles.mypage_tab_bar} onClick={handleClickTabMenu}>
            <li className={`${styles.mypage_tab_menu} ${styles.current_tab}`} data-value="profile">프로필 설정</li>
            <li className={styles.mypage_tab_menu} data-value="change_password">비밀번호 변경</li>
            <li className={styles.mypage_tab_menu} data-value="my_posts">내가 쓴 글</li>
        </ul>
    )
}

export default MyPageTabBar;