import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = (props) => {
    return(
        <div className={styles.login_page}>
            <form className={styles.login_form}>
                <h1 className={styles.login_text}>로그인</h1>
                <div className={styles.login_input_box}>
                    <label className={styles.label} htmlFor={styles.email}>이메일</label>
                    <input placeholder='ex.teentam@gmail.com' 
                        className={styles.login_input} 
                        id={styles.email} 
                        type="email" 
                        name="email"
                    />
                    <p className={`${styles.error_message} ${styles.email_error}`}></p>
                </div>
                <div className={styles.login_input_box}>
                    <label className={styles.label} htmlFor={styles.password}>비밀번호</label>
                    <input 
                        placeholder='비밀번호'
                        className={styles.login_input} 
                        id={styles.password} 
                        type="password" 
                        name="password"
                    />
                    <p className={`${styles.error_message} ${styles.password_error}`}></p>
                </div>
                <button className={styles.login_button}>로그인</button>
                <p className={styles.go_to_signup}>처음이신가요? <Link className={styles.link_signup} to="/signup">회원가입</Link></p>
            </form>
        </div>
    )
}

export default LoginPage;