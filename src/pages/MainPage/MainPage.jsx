import React, { useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import MainPageMainSection from '../../components/MainPageMainSection/MainPageMainSection';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MainPage.module.css';
import { Logout } from '../../app';

const MainPage = () => {
    const logout = useContext(Logout);

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