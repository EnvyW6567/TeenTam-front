import React, { useState } from 'react';
import MyPageTabBar from '../MyPageTabBar/MyPageTabBar';
import styles from './MyPageCard.module.css';

const MyPageCard = (props) => {
    const [tabMenu, setTabMenu] = useState("profile");

    return(
        <section className={styles.mypage_card}>
            <h1 className={styles.mypage_card_title}>마이페이지</h1>
            <section className={styles.mapage_section}>
                <MyPageTabBar setTabMenu={setTabMenu}/>
                <div className={styles.mypage_centent}>
                    {tabMenu}
                </div>
            </section>

        </section>
    )
}

export default MyPageCard;