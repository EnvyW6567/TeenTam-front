import React, { useRef } from 'react';
import { useContext } from 'react';
import { CRUD } from '../../app';
import styles from './PasswordChangeForm.module.css';

const PasswordChangeForm = ({ userId }) => {
    const CRUDservice = useContext(CRUD);

    const oldPasswordRef = useRef();
    const newPasswordRef = useRef();
    const newPasswordConfirmRef = useRef();

    const errorRef = {
        oldPasswordErrorRef: useRef(),
        newPasswordErrorRef: useRef(),
        newPasswordConfirmErrorRef: useRef()
    };

    // 에러메시지 출력
    const printErrorMessage = (category, message) => {
        const refName = category + "ErrorRef";
        errorRef[refName].current.innerText = message;
    }
    //  인풋태그 에러메시지를 지우는 함수
    const cleanErrorMessage = (refName) => {
        errorRef[refName].current.innerText = "";
    }

    const handleFocusInput = (e) => {
        const refName = e.target.name + 'ErrorRef';
        cleanErrorMessage(refName);
    }

    const handleClickChangePassword = async (e) => {
        e.preventDefault();
        // 폼에 출력되어져 있는 에러메시지들 지우기(닉네임 제외)
        cleanErrorMessage("oldPasswordErrorRef");
        cleanErrorMessage("newPasswordErrorRef");
        cleanErrorMessage("newPasswordConfirmErrorRef");

        // 인풋 태그들에 입력된 값 가져오기
        const oldPassword = oldPasswordRef.current.value;
        const newPassword = newPasswordRef.current.value;
        const newPasswordConfirm = newPasswordConfirmRef.current.value;
        
        // 유효성 검사 성공 시 회원가입처리
        if (validation(oldPassword, newPassword, newPasswordConfirm)) {
            await CRUDservice.changePassword(userId, oldPassword, newPassword);
        }
    }

    const validation = (oldPassword, newPassword, newPasswordConfirm) => {
        if (!oldPassword) {
            printErrorMessage("oldPassword", "사용하던 비밀번호를 입력해주세요");
            return false;
        }
        if(!newPassword){
            printErrorMessage("newPassword", "변경하실 비밀번호를 입력해주세요");
            return false;
        }
        if(!newPasswordConfirm){
            printErrorMessage("newPasswordConfirm", "변경하실 비밀번호를 한 번 더 입력해주세요");
            return false;
        }
        if(newPassword !== newPasswordConfirm){
            printErrorMessage("newPasswordConfirm", "입력한 비밀번호가 동일하지 않습니다");
            return false;
        }
        return true;
    }

    return(
        <form className={styles.password_change_form}>
            <div className={styles.password_change_input_box}>
                <label className={styles.label} htmlFor={styles.old_password}>기존 비밀번호</label>
                <input
                    onFocus={handleFocusInput} 
                    ref={oldPasswordRef}
                    placeholder='사용하던 비밀번호를 입력해주세요'
                    className={styles.password_change_input} 
                    id={styles.old_password} 
                    type="password" 
                    name="oldPassword"
                />
                <p className={styles.error_message} ref={errorRef.oldPasswordErrorRef}></p>
            </div>
            <div className={styles.password_change_input_box}>
                <label className={styles.label} htmlFor={styles.password}>새 비밀번호</label>
                <input
                    onFocus={handleFocusInput} 
                    ref={newPasswordRef}
                    placeholder='변경하실 비밀번호를 입력해주세요'
                    className={styles.password_change_input} 
                    id={styles.password} 
                    type="password" 
                    name="newPassword"
                />
                <p className={styles.error_message} ref={errorRef.newPasswordErrorRef}></p>
            </div>
            <div className={styles.password_change_input_box}>
                <label className={styles.label} htmlFor={styles.password_confirm}>새 비밀번호 확인</label>
                <input 
                    onFocus={handleFocusInput}
                    ref={newPasswordConfirmRef}
                    placeholder='변경하실 비밀번호를 한 번 더 입력해주세요'
                    className={styles.password_change_input} 
                    id={styles.password_confirm} 
                    type="password" 
                    name="newPasswordConfirm"
                />
                <p className={styles.error_message} ref={errorRef.newPasswordConfirmErrorRef}></p>
            </div>
            <button className={styles.password_change_button} onClick={handleClickChangePassword} >변경 완료</button>
        </form>
    )
}

export default PasswordChangeForm;