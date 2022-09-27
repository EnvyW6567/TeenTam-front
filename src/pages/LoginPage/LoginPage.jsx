import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = ({authService}) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const errorRef = {
        emailErrorRef: useRef(),
        passwordErrorRef: useRef()
    }

    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        // 폼에 출력되어져 있는 에러메시지들 지우기
        cleanErrorMessage();
        // 인풋 태그들에 입력된 값 가져오기
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // 유효성 검사 성공하면 로그인시도
        if(validation(email, password)){
            authService.login({
                email, 
                password,
            }, goToMainPage);
        }
    }
    // 메인페이지로 이동
    const goToMainPage = (data) => {
        navigate("/", {
            state: data
        });
    }
    // 유효성 검사
    const validation = (email, password) => {
        if(!email){
            printErrorMessage("email", "이메일을 입력해주세요");
            return false;
        }
        else if(!email.includes('@')){
            printErrorMessage("email", "이메일 형식에 맞춰 입력해주세요");
            return false;
        }
        else if(!password){
            printErrorMessage("password", "비밀번호를 입력해주세요");
            return false;
        }
        return true;
    }
    // 에러메시지 출력
    const printErrorMessage = (category, message) => {
        const refName = category + "ErrorRef";
        errorRef[refName].current.innerText = message;
    }
    // 각 인풋 태그들의 에러메시지를 지우는 함수
    const cleanErrorMessage = () => {
        for (const ref in errorRef){
            errorRef[ref].current.innerText = "";
        }
    }

    // 인풋태그 클릭하면 해당 인풋과 관련된 오류메시지를 지움
    const handleFocusInput = (e) => {
        errorRef[e.target.name + 'ErrorRef'].current.innerText = '';
    }

    return(
        <div className={styles.login_page}>
            <form className={styles.login_form}>
                <h1 className={styles.login_text}>로그인</h1>
                <div className={styles.login_input_box}>
                    <label className={styles.label} htmlFor={styles.email}>이메일</label>
                    <input 
                        onFocus={handleFocusInput}
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
                        onFocus={handleFocusInput} 
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