import React from 'react';
import styles from './MainPageProfile.module.css';

// 메인페이지 우측 MainPageSideSection 컴포넌트에서 프로필을 보여주는 컴포넌트
// 로그인 전 / 후로 다른 모습을 보여주도록 해야 함
// 마이페이지에서 보이는 프로필은 MyPageProfile이란 이름으로 따로 만드는 게 좋을 듯 함

const MainPageProfile = (props) => {
    return(
        <div className={styles.main_page_profile}>
            프로-필
        </div>
    )
}

export default MainPageProfile;