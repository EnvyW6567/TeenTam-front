import React from 'react';
import styles from './ThisWeekBestUser.module.css';

// 메인페이지 우측 MainPageSideSection 컴포넌트에서 이번달 활동이 많은 유저 순위 보여주는 컴포넌트
// 다른 기능을 하는 컴포넌트로 대체 가능(즉 이 컴포넌트는 임의로 박아둔 것임)

const ThisWeekBestUser = (props) => {
    return(
        <div className={styles.this_week_best_user}>
            이번주 작성킹
        </div>
    )
}

export default ThisWeekBestUser;