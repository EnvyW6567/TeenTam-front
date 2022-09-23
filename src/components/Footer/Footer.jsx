import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return(
        <footer className={styles.footer}>
            <section className={styles.footer_contents}>
                <p className={`${styles.footer_text} ${styles.footer_developer}`}>개발자 :: 노병우 | 정민균 | 조상현</p>
                <p className={`${styles.footer_text} ${styles.footer_menu}`}>서비스 소개  |  이용약관  |  개인정보 처리방침  |  신고가이드</p>
                <p className={`${styles.footer_text} ${styles.footer_title}`}>©2022.Teentam</p>
            </section>
        </footer>
    )
}

export default Footer;