import React, { useState } from 'react';
import PasswordChangeForm from '../PasswordChangeForm/PasswordChangeForm';
import ProfileSettingForm from '../ProfileSettingForm/ProfileSettingForm';
import styles from './MyPageContent.module.css';

const MyPageContent = ({ tabMenu }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return(
        <section className={styles.mypage_content_section}>
            {
                tabMenu === "profile" ? (
                    <ProfileSettingForm user={user}/>
                ) : (
                    <PasswordChangeForm userId={user.id}/>
                )
            }
        </section>
    )
}

export default MyPageContent;