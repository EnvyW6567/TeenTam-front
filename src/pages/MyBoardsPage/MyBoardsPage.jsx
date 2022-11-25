import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../app';
import Footer from '../../components/Footer/Footer';
import MainPageSideSection from '../../components/MainPageSideSection/MainPageSideSection';
import MyBoards from '../../components/MyBoards/MyBoards';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MyBoardsPage.module.css';

const MyBoardsPage = (props) => {
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
        <section className={styles.my_boards_page}>
            <Navbar />
            <section className={styles.my_boards_main}>
                <MyBoards />
                <MainPageSideSection />
            </section>
            <Footer />
        </section>
    );
}

export default MyBoardsPage;