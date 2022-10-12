class CRUDService {
    constructor(axiosApi){
        this.axiosApi = axiosApi;
    }
    // 게시글 생성
    createPost(boards_category, boards_writer, title, content, onCreate){
        const data = {
            boards_category: 1,
            boards_writer: parseInt(boards_writer),
            title,
            content
        };

        this.axiosApi.post("/boards/create-board/", data)
            .then(response => {
                const newBoardsId = response.data.boards_id;
                onCreate(`/boards/${boards_category}/id/${newBoardsId}/`);
            })
            .catch(error => {
                console.log(error);
            })
    }
    // 게시글 불러오기
    getPost(boardsCategory, boardsId, setPost, setCommentsList){
        this.axiosApi.get(`/boards/${boardsCategory}/id/${boardsId}/`)
            .then(response => {
                const data = response.data.data[0];
                setCommentsList(data.comments);

                const { boards_writer, content, title, like,
                    delete_date, writer_username, pub_date } = data;
                
                setPost({
                    boards_id: boardsId, boards_writer, comments_num: data.comments.length, content, 
                    title, like, delete_date, writer_username, pub_date
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    // 게시글 삭제하기
    deletePost(userId, boardsId, onDelete){
        const data = {
            user_id: userId
        };

        const res = window.confirm("이 글을 삭제하시겠습니까?");
        if(res){
            this.axiosApi.delete(`/boards/delete-board/${boardsId}/`, {data})
                .then(response => {
                    // 삭제 이후엔 바로 이전 페이지로 이동
                    onDelete(-1);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    // 게시글 목록 불러오기
    getPostList(boardsCategory, order, setPostList, setPostCount){
        this.axiosApi.get(`/boards/${boardsCategory}?page=1&offset=5&order=${order}`)
            .then(response => {
                setPostList(response.data.data);
                setPostCount(response.data.boards_num);
            })
            .catch(error => {
                console.log(error);
            })
    }
    // 게시글 좋아요
    updatePostLike(userId, boardsId, onLike){
        const res = window.confirm("이 글을 공감하시겠습니까?");
        if(res){
            const data = {
                likes_user: userId,
                likes_board: boardsId
            };
    
            this.axiosApi.post("/boards/like-board/", data)
                .then(response => {
                    if(response.data.message === "like success"){
                        alert("이 글을 공감하였습니다");
                        onLike(prev => {
                            return {
                                ...prev,
                                like: response.data.likes
                            };
                        })
                    }
                    else{
                        alert("이미 공감한 글입니다.")
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    // 댓글 생성
    createComment(userId, boardsId, content){
        const data = {
            comments_writer: userId,
            comments_board: boardsId,
            content
        };

        this.axiosApi.post("/boards/create-comment/", data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default CRUDService;
  