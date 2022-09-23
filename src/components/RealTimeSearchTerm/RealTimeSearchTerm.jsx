import React from 'react';
import styles from './RealTimeSearchTerm.module.css';

// 메인페이지 우측 MainPageSideSection 컴포넌트에서 실시간 검색어 순위를 보여주는 컴포넌트
// 다른 기능을 하는 컴포넌트로 대체 가능(즉 이 컴포넌트는 임의로 박아둔 것임)

const RealTimeSearchTerm = (props) => {
    return(
        <div className={styles.real_time_search_term}>
            실시간 검색어
        </div>
    )
}

export default RealTimeSearchTerm;