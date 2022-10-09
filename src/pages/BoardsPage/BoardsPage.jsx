import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../app';
import Boards from '../../components/Boards/Boards';
import Footer from '../../components/Footer/Footer';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import Navbar from '../../components/Navbar/Navbar';
import styles from './BoardsPage.module.css';

const BoardsPage = (props) => {
    const authService = useContext(AUTH);
    const navigate = useNavigate();

    useEffect(() => {
        async function keepLogin(){
            const userData = localStorage.getItem("user");
            if(userData){
                const res = await authService.refreshAccessToken();
                if(!res){
                    alert("로그인이 만료됐습니다. 다시 로그인해주세요");
                    navigate("/login");
                }
            }
        }
        keepLogin();
    }, [authService, navigate]);
    
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