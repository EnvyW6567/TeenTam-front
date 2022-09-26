import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import MainPageMainSection from '../../components/MainPageMainSection/MainPageMainSection';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MainPage.module.css';

const MainPage = ({authService}) => {
    const location = useLocation();

    const [user, setUser] = useState(location.state ? location.state : {});

    const logout = () => {
        authService.logout(() => {setUser({})});
    }
    return(
        <div className={styles.main_page}>
            <Navbar user={user} logout={logout} />
            <section className={styles.main}>
                <MainPageMainSection />
                <MainPageSideSection user={user}/>
            </section>
            <Footer />
        </div>
    )
}

export default MainPage;