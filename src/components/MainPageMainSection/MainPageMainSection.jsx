import React from 'react';
import { Link } from 'react-router-dom';
import { BsChatDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import SearchBar from '../SearchBar/SearchBar';
import styles from './MainPageMainSection.module.css';
import MainPagePostList from '../MainPagePostList/MainPagePostList';

// MainPage에서의 MainSection 컴포넌트
// SearchBar 및 주요 게시판의 글들을 보여줌
// Grid로 css작업을 했으며 추후 각 게시판의 글을 보여주는 컴포넌트가 생기면
// boards안의 section태그들을 그 컴포넌트들로 바꿔줘야 함(현재 하드코딩으로 레이아웃만 만듦)

const MainPageMainSection = (props) => {
    return(
        <section className={styles.main_page_main_section}>
            <SearchBar isInMainPage={true}/>
            <section className={styles.boards}>
                <section className={styles.main_section_board}>
                    <div className={styles.board_header}>
                        오늘의 메인 탐탐👀
                        <Link className={styles.go_more} to="/">더보기 &#62;</Link>
                    </div>
                    <div className={styles.main_board_body}>
                        <div className={styles.main_board_content}>
                            <span className={styles.board_category}>아이돌</span>
                            아니 너네 이번에 BTS 봤냐?
                            <span className={styles.main_board_content_info}>
                                <span className={styles.view_info}>
                                    <AiOutlineEye className={styles.view_icon} />
                                    <span className={styles.view_count}>80</span>
                                </span>
                                <span className={styles.comment_info}>
                                    <BsChatDots className={styles.comment_icon} />
                                    <span className={styles.view_count}>105</span>
                                </span>
                            </span>
                        </div>
                        <div className={styles.main_board_content}>
                            <span className={styles.board_category}>썸/연애</span>
                            너무 힘들다.. 
                            <span className={styles.main_board_content_info}>
                                <span className={styles.view_info}>
                                    <AiOutlineEye className={styles.view_icon} />
                                    <span className={styles.view_count}>94</span>
                                </span>
                                <span className={styles.comment_info}>
                                    <BsChatDots className={styles.comment_icon} />
                                    <span className={styles.view_count}>29</span>
                                </span>
                            </span>
                        </div>
                        <div className={styles.main_board_content}>
                            <span className={styles.board_category}>학교</span>
                            이렇게 된 이상 수능에 모든 걸 건다
                            <span className={styles.main_board_content_info}>
                                <span className={styles.view_info}>
                                    <AiOutlineEye className={styles.view_icon} />
                                    <span className={styles.view_count}>256</span>
                                </span>
                                <span className={styles.comment_info}>
                                    <BsChatDots className={styles.comment_icon} />
                                    <span className={styles.view_count}>151</span>
                                </span>
                            </span>
                        </div>
                        <div className={styles.main_board_content}>
                            <span className={styles.board_category}>아이돌</span>
                            아니 너네 이번에 BTS 봤냐?
                            <span className={styles.main_board_content_info}>
                                <span className={styles.view_info}>
                                    <AiOutlineEye className={styles.view_icon} />
                                    <span className={styles.view_count}>80</span>
                                </span>
                                <span className={styles.comment_info}>
                                    <BsChatDots className={styles.comment_icon} />
                                    <span className={styles.view_count}>105</span>
                                </span>
                            </span>
                        </div>
                        <div className={styles.main_board_content}>
                            <span className={styles.board_category}>진로</span>
                            변호사 쪽에 관심이 생겼어
                            <span className={styles.main_board_content_info}>
                                <span className={styles.view_info}>
                                    <AiOutlineEye className={styles.view_icon} />
                                    <span className={styles.view_count}>82</span>
                                </span>
                                <span className={styles.comment_info}>
                                    <BsChatDots className={styles.comment_icon} />
                                    <span className={styles.view_count}>14</span>
                                </span>
                            </span>
                        </div>
                    </div>    
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={1} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={2} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={3} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={4} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={6} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={7} />
                </section>
                <section className={styles.main_section_board}>
                    <MainPagePostList category={8} />
                </section>
            </section>
        </section>
    )
}

export default MainPageMainSection;