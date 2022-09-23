import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = ({authService}) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const errorRef = {
        emailErrorRef: useRef(),
        passwordErrorRef: useRef()
    }
    
    const handleLogin = (e) => {
        e.preventDefault();
        // 인풋 태그들에 입력된 값 가져오기
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // 유효성 검사
        if(!email){
            errorRef.emailErrorRef.current.innerText = "이메일을 입력해주세요";
        }
        else if(!email.includes('@')){
            errorRef.emailErrorRef.current.innerText = "이메일 형식에 맞춰 입력해주세요";
        }
        else if(!password){
            errorRef.passwordErrorRef.current.innerText = "비밀번호를 입력해주세요";
        }
        else{
            authService.login();
        }
    }

    const handleInputFocus = (e) => {
        // 인풋태그 클릭하면 해당 인풋과 관련된 오류메시지를 지움
        errorRef[e.target.name + 'ErrorRef'].current.innerText = '';
    }

    return(
        <div className={styles.login_page}>
            <form className={styles.login_form}>
                <h1 className={styles.login_text}>로그인</h1>
                <div className={styles.login_input_box}>
                    <label className={styles.label} htmlFor={styles.email}>이메일</label>
                    <input 
                        onFocus={handleInputFocus}
                        placeholder='ex.teentam@gmail.com' 
                        className={styles.login_input} 
                        id={styles.email} 
                        type="email" 
                        name="email"
                        ref={emailRef}
                    />
                    <p className={styles.error_message} ref={errorRef.emailErrorRef}></p>
                </div>
                <div className={styles.login_input_box}>
                    <label className={styles.label} htmlFor={styles.password}>비밀번호</label>
                    <input
                        onFocus={handleInputFocus} 
                        placeholder='비밀번호'
                        className={styles.login_input} 
                        id={styles.password} 
                        type="password" 
                        name="password"
                        ref={passwordRef}
                    />
                    <p className={styles.error_message} ref={errorRef.passwordErrorRef}></p>
                </div>
                <button className={styles.login_button} onClick={handleLogin}>로그인</button>
                <p className={styles.go_to_signup}>처음이신가요? <Link className={styles.link_signup} to="/signup">회원가입</Link></p>
            </form>
        </div>
    )
}

export default LoginPage;