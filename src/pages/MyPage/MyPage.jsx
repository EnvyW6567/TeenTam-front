import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH } from '../../app';
import Footer from '../../components/Footer/Footer';
import MyPageCard from '../../components/MyPageCard/MyPageCard';
import Navbar from '../../components/Navbar/Navbar';
import styles from './MyPage.module.css';

const MyPage = (props) => {
    const authService = useContext(AUTH);
    const navigate = useNavigate();

    useEffect(() => {
        async function keepLogin(){
            const userData = localStorage.getItem("user");
            if (!userData) {
                alert("로그인이 필요한 페이지입니다");
                navigate("/login");
            } else if(userData) {
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
        <section className={styles.mypage}>
            <Navbar />
            <MyPageCard />
            <Footer />
        </section>
    );
}

export default MyPage;