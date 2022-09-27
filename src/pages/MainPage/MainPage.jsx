import React from 'react';
import Footer from '../../components/Footer/Footer';
import MainPageMainSection from '../../components/MainPageMainSection/MainPageMainSection';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MainPage.module.css';

const MainPage = ({authService, setUserId}) => {
    const logout = () => {
        authService.logout(() => { setUserId(null) });
    }

    return(
        <div className={styles.main_page}>
            <Navbar logout={logout} />
            <section className={styles.main}>
                <MainPageMainSection />
                <MainPageSideSection />
            </section>
            <Footer />
        </div>
    )
}

export default MainPage;