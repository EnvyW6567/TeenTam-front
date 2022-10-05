import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentCreateForm from '../../components/CommentCreateForm/CommentCreateForm';
import CommentsList from '../../components/CommentsList/CommentsList';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import PostContent from '../../components/PostContent/PostContent';
import styles from './PostDetailPage.module.css';

const PostDetailPage = ({crudService}) => {
    const params = useParams();
    
    const boardsCategory = params.boards_category;
    const boardsId = params.boards_id;

    const [post, setPost] = useState(null);
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        crudService.getPost(boardsCategory, boardsId, setPost, setCommentsList);
    }, [crudService, boardsCategory, boardsId, setPost, setCommentsList])

    return(
        <div className={styles.post_detail_page}>
            <Navbar />
            <PostContent post={post} />
            <CommentCreateForm />
            <CommentsList commentsList={commentsList}/>
            <Footer />
        </div>
    )
}

export default PostDetailPage;