import React, { useContext, useRef, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import WritePostBar from '../../components/WritePostBar/WritePostBar';
import { AUTH, CRUD } from '../../app';
import { useNavigate } from 'react-router-dom';
import styles from './WritePostPage.module.css';

const WritePostPage = (props) => {
    const crudService = useContext(CRUD);
    const authService = useContext(AUTH);

    const [user, setUser] = useState(null);

    const [category, setCategory] = useState("");

    const titleRef = useRef();
    const contentRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        async function keepLogin(){
            const userData = localStorage.getItem("user");
            if(!userData){
                alert("로그인이 필요한 페이지입니다");
                navigate("/login");
            }
            else{
                const res = await authService.refreshAccessToken();
                if(res){
                    setUser(JSON.parse(userData));
                }
                else{
                    alert("로그인이 만료됐습니다. 다시 로그인해주세요");
                    navigate("/login");
                }
            }
        }
        keepLogin();
    }, [navigate, setUser, authService]);

    // 자동으로 textArea 높이 조정
    const handleChangeContent = () => {
        contentRef.current.style.height = "auto";
        contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    }
    // 카테고리 설정
    const handleChangeCaterogy = (e) => {
        setCategory(e.target.value);
    }
    // 글 작성 
    const handleClickWrite = (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const content = contentRef.current.value;
        
        if(validation(title, content)){
            crudService.createPost(
                category,
                user.id,
                title,
                content,
                navigate
            );
        }
    }
    // 유효성검사
    const validation = (title, content) => {
        if(!category){
            alert("카테고리를 선택해주세요");
            return false;
        }
        else if(!title){
            alert("제목을 입력해주세요");
            return false;
        }
        else if(!content){
            alert("본문을 입력해주세요");
            return false;
        }
        return true;
    }

    return(
        <div className={styles.write_post_page}>
            <Navbar />
            <form className={styles.write_post_form}>
                <div className={styles.write_post_input_box}>
                    <select className={styles.category_input} onChange={handleChangeCaterogy} value={category}>
                        <option value="">카테고리</option>
                        <option value="1">아이돌</option>
                        <option value="2">친구</option>
                        <option value="3">가족</option>
                        <option value="4">썸/연애</option>
                    </select>
                </div>
                <div className={styles.write_post_input_box}>
                    <input 
                        placeholder='제목' 
                        className={styles.title_input} 
                        id={styles.title} 
                        type="text" 
                        name="title"
                        ref={titleRef}
                    />
                </div>
                <div className={styles.write_post_input_box}>
                    <textarea 
                        onChange={handleChangeContent}
                        placeholder='본문을 입력해 주세요' 
                        className={styles.content_input} 
                        id={styles.content} 
                        type="text" 
                        name="content"
                        ref={contentRef}
                        rows={1}
                    >
                    </textarea>
                </div>
            </form>
            <WritePostBar handleWrite={handleClickWrite} />
        </div>
    )
}

export default WritePostPage;