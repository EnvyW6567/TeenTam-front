import React from 'react';
import styles from './WritePostBar.module.css';

const WritePostBar = ({handleWrite}) => {
    return(
        <footer className={styles.write_post_bar}>
            <button className={styles.write_button} onClick={handleWrite}>완 료</button>
        </footer>
    )
}

export default WritePostBar;