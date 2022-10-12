import React, { useState } from 'react';
import MainPageProfile from '../MainPageProfile/MainPageProfile';
import RealTimeSearchTerm from '../RealTimeSearchTerm/RealTimeSearchTerm';
import SchoolLunchCard from '../SchoolLunchCard/SchoolLunchCard';
import ThisWeekBestUser from '../ThisWeekBestUser/ThisWeekBestUser';
import styles from './MainPageSideSection.module.css';

// MainPage 우측 SideSection컴포넌트

const MainPageSideSection = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return(
        <section className={styles.main_page_side_section}>
            <section className={styles.side_menus}>
                <MainPageProfile  user={user} />
                { user && <SchoolLunchCard schoolName={"홍천고등학교"}/> }
                <RealTimeSearchTerm />
                <ThisWeekBestUser />
            </section>
        </section>
    )
}

export default MainPageSideSection;