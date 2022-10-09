import React, { useState, useRef, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH } from '../../app';
import styles from './SignupPage.module.css';

const SignupPage = (props) => {
    const authService = useContext(AUTH);
    // 중복확인 버튼을 눌렀는지
    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const usernameRef = useRef();
    const phoneNumberRef = useRef();
    const birthRef = useRef();

    const errorRef = {
        emailErrorRef: useRef(),
        passwordErrorRef: useRef(),
        passwordConfirmErrorRef: useRef(),
        usernameErrorRef: useRef(),
        phoneNumberErrorRef: useRef(),
        birthErrorRef: useRef()
    }

    const handleSignup = (e) => {
        e.preventDefault();
        // 폼에 출력되어져 있는 에러메시지들 지우기(닉네임 제외)
        cleanErrorMessage("emailErrorRef");
        cleanErrorMessage("passwordErrorRef");
        cleanErrorMessage("passwordConfirmErrorRef");
        cleanErrorMessage("phoneNumberErrorRef");
        cleanErrorMessage("birthErrorRef");

        // 인풋 태그들에 입력된 값 가져오기
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const password2 = passwordConfirmRef.current.value;
        const username = usernameRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const birth = birthRef.current.value;

        // 유효성 검사 성공 시 회원가입처리
        if(validation(email, password, password2, username, phoneNumber, birth)){
            authService.signup({
                email,
                password: password,
                username,
                birth: getFormattedBirth(birth),
                phone_number: phoneNumber
            }, goToMainPage, printErrorMessage);
        }
        
    }
    // 유효성 검사
    const validation = (email, password, password2, username, phoneNumber, birth) => {
        if(!email){
            printErrorMessage("email", "사용하실 이메일을 입력해주세요");
            return false;
        }
        else if(!email.includes('@')){
            printErrorMessage("email", "이메일 형식에 맞춰 입력해주세요");
            return false;
        }
        else if(!password){
            printErrorMessage("password", "사용하실 비밀번호를 입력해주세요");
            return false;
        }
        else if(!password2){
            printErrorMessage("passwordConfirm", "사용하실 비밀번호를 입력해주세요");
            return false;
        }
        else if(password !== password2){
            printErrorMessage("passwordConfirm", "입력한 비밀번호가 동일하지 않습니다");
            return false;
        }
        else if(!username){
            printErrorMessage("username", "사용하실 닉네임을 입력해주세요");
            return false;
        }
        else if(!isChecked){
            return false;
        }
        else if(!phoneNumber){
            printErrorMessage("phoneNumber", "전화번호를 입력해주세요");
            return false;
        }
        else if(!birth){
            printErrorMessage("birth", "생년월일을 입력해주세요");
            return false;
        }
        else if(birth.length < 8){
            printErrorMessage("birth", "8자리로 입력해주세요");
            return false;
        }
        return true;
    }
    // 메인페이지로 이동
    const goToMainPage = () => {
        navigate("/");
    }
    // 8자리 문자열 형태로 받은 birth를 하이픈이 있는 형태로 바꿔서 반환
    // ex) 19901210 -> 1990-12-10
    const getFormattedBirth = (birth) => {
        const formatterBirth = (
            birth.substring(0, 4) + '-' 
            + birth.substring(4, 6) + '-' 
            + birth.substring(6, 8)
        );
        return formatterBirth;
    }
    // 에러메시지 출력
    const printErrorMessage = (category, message) => {
        const refName = category + "ErrorRef";
        errorRef[refName].current.innerText = message;
    }
    //  인풋태그 에러메시지를 지우는 함수
    const cleanErrorMessage = (refName) => {
        errorRef[refName].current.innerText = "";
    }
    // 인풋태그 클릭하면 해당 인풋과 관련된 오류메시지를 지움
    const handleFocusInput = (e) => {
        const refName = e.target.name + 'ErrorRef';
        cleanErrorMessage(refName);
    }
    // username 작성 끝낼 시 중복검사
    const handleBlurInput = async (e) => {
        const username = usernameRef.current.value;

        if(username){
            const checkResult = await authService.checkUsername(username);

            if(checkResult){
                setIsChecked(true);
                errorRef.usernameErrorRef.current.classList.add(styles.done_check);
                errorRef[e.target.name + 'ErrorRef'].current.innerText = "✔ 사용가능한 닉네임입니다";
            }
            else{
                setIsChecked(false);
                errorRef.usernameErrorRef.current.classList.remove(styles.done_check);
                errorRef[e.target.name + 'ErrorRef'].current.innerText = "사용할 수 없는 닉네임입니다";
            }
        }
    }

    const handleInputChange = (e) => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    }

    // 이미 로그인 정보 있으면 메인페이지로 이동
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if(userData){
            navigate("/");
        }
    }, [navigate])

    return(
        <div className={styles.signup_page}>
            <form className={styles.signup_form}>
                <h1 className={styles.signup_text}>회원가입</h1>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.email}>이메일</label>
                    <input
                        onFocus={handleFocusInput}
                        ref={emailRef} 
                        placeholder='사용하실 이메일 주소를 입력해주세요' 
                        className={styles.signup_input} 
                        id={styles.email} 
                        type="email" 
                        name="email"
                    />
                    <p className={styles.error_message} ref={errorRef.emailErrorRef}></p>
                </div>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.password}>비밀번호</label>
                    <input
                        onFocus={handleFocusInput} 
                        ref={passwordRef}
                        placeholder='사용하실 비밀번호를 입력해주세요'
                        className={styles.signup_input} 
                        id={styles.password} 
                        type="password" 
                        name="password"
                    />
                    <p className={styles.error_message} ref={errorRef.passwordErrorRef}></p>
                </div>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.password_confirm}>비밀번호 확인</label>
                    <input 
                        onFocus={handleFocusInput}
                        ref={passwordConfirmRef}
                        placeholder='비밀번호를 한 번 더 입력해주세요'
                        className={styles.signup_input} 
                        id={styles.password_confirm} 
                        type="password" 
                        name="passwordConfirm"
                    />
                    <p className={styles.error_message} ref={errorRef.passwordConfirmErrorRef}></p>
                </div>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.username}>닉네임</label>
                    <input 
                        onFocus={handleFocusInput}
                        onBlur={handleBlurInput}
                        ref={usernameRef}
                        placeholder='사용하실 닉네임을 입력해주세요'
                        className={styles.signup_input} 
                        id={styles.username} 
                        type="text" 
                        name="username"
                    />
                    <p className={styles.error_message} ref={errorRef.usernameErrorRef}></p>
                </div>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.phone_number}>전화번호</label>
                    <input 
                        onFocus={handleFocusInput}
                        onChange={handleInputChange}
                        ref={phoneNumberRef}
                        placeholder="전화번호를 입력해주세요( '-' 제외)"
                        className={styles.signup_input} 
                        id={styles.phone_number} 
                        type="text" 
                        name="phoneNumber"
                        maxLength={11}
                    />
                    <p className={styles.error_message} ref={errorRef.phoneNumberErrorRef}></p>
                </div>
                <div className={styles.signup_input_box}>
                    <label className={styles.label} htmlFor={styles.birth}>생년월일</label>
                    <input 
                        onFocus={handleFocusInput}
                        onChange={handleInputChange}
                        ref={birthRef}
                        placeholder='생년월일 8자리를 입력해주세요'
                        className={styles.signup_input} 
                        id={styles.birth} 
                        type="text" 
                        name="birth"
                        maxLength={8}
                    />
                    <p className={styles.error_message} ref={errorRef.birthErrorRef}></p>
                </div>
                <button className={styles.signup_button} onClick={handleSignup}>회원가입</button>
                <p className={styles.go_to_login}>이미 회원이신가요? <Link className={styles.link_login} to="/login">로그인</Link></p>
            </form>
        </div>
    )
}

export default SignupPage;