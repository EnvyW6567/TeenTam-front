class CRUDService {
    constructor(axiosApi){
        this.axiosApi = axiosApi;
    }
    // 게시글 생성
    async createPost(boards_category, boards_writer, title, content){
        const data = {
            boards_category: 1,
            boards_writer: parseInt(boards_writer),
            title,
            content
        };

        await this.axiosApi.post("/boards/create-board/", data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    // 게시글 불러오기
    async getPost(boardsCategory, boardsId, setPost, setCommentsList){
        await this.axiosApi.get(`/boards/${boardsCategory}/id/${boardsId}/`)
            .then(response => {
                const data = response.data.data[0];
                setCommentsList(data.comments);

                const { boards_writer, content, title, like,
                    delete_date, writer_username, pub_date } = data;
                
                setPost({
                    boards_writer, comments_num: data.comments.length, content, title,
                    like, delete_date, writer_username, pub_date
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    async getPostList(boardsCategory, order, setPostList, setPostCount){
        await this.axiosApi.get(`/boards/${boardsCategory}?page=1&offset=5&order=${order}`)
            .then(response => {
                setPostList(response.data.data);
                setPostCount(response.data.boards_num);
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default CRUDService;
  