import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import styles from './MainPageMainSection.module.css';

// MainPage에서의 MainSection 컴포넌트
// SearchBar 및 주요 게시판의 글들을 보여줌
// Grid로 css작업을 했으며 추후 각 게시판의 글을 보여주는 컴포넌트가 생기면
// boards안의 section태그들을 그 컴포넌트들로 바꿔줘야 함

const MainPageMainSection = (props) => {
    return(
        <section className={styles.main_page_main_section}>
            <SearchBar />
            <section className={styles.boards}>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
                <section className={styles.section}></section>
            </section>
        </section>
    )
}

export default MainPageMainSection;