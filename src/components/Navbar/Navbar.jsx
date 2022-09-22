import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.png';

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