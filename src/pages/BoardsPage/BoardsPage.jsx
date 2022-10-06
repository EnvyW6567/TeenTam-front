import React from 'react';
import Boards from '../../components/Boards/Boards';
import Footer from '../../components/Footer/Footer';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './BoardsPage.module.css';

const BoardsPage = (props) => {
    return(
        <section className={styles.boards_page}>
            <Navbar />
            <section className={styles.boards_main}>
                <Boards />
                <MainPageSideSection />
            </section>
            <Footer />
        </section>
    );
}

export default BoardsPage;