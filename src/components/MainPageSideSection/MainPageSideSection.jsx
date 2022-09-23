import React from 'react';
import MainPageProfile from '../MainPageProfile/MainPageProfile';
import RealTimeSearchTerm from '../RealTimeSearchTerm/RealTimeSearchTerm';
import ThisWeekBestUser from '../ThisWeekBestUser/ThisWeekBestUser';
import styles from './MainPageSideSection.module.css';

// MainPage 우측 SideSection컴포넌트

const MainPageSideSection = (props) => {
    return(
        <section className={styles.main_page_side_section}>
            <section className={styles.side_menus}>
                <MainPageProfile />
                <RealTimeSearchTerm />
                <ThisWeekBestUser />
            </section>
        </section>
    )
}

export default MainPageSideSection;