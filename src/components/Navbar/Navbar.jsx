import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

// Nabigation Bar역할의 컴포넌트
// 로그인 전 후로 다른 모습 보여주도록 추후 작업이 필요
// 각 메뉴들을 클릭했을 때 해당 페이지로 연결하도록 하는 작업도 필요

const Navbar = (props) => {
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar_contents}>
                <img className={styles.logo} src={logo} alt="TeenTam" />
                <ul className={styles.navbar_menu}>
                    <li cn={styles.navbar_menu_name}>커뮤니티</li>
                    <li cn={styles.navbar_menu_name}>시간표</li>
                    <li cn={styles.navbar_menu_name}>급식타임</li>
                </ul>
                <div className={styles.navbar_button_list}>
                    <button className={`${styles.navbar_button} ${styles.go_to_login}`}>로그인</button>
                    <button className={`${styles.navbar_button} ${styles.go_to_signup}`}>회원가입</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;