import React, { useState } from 'react';
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
                    <>크아앙</>
                )
            }
        </section>
    )
}

export default MyPageContent;