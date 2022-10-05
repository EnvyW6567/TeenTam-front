class CRUDService {
    constructor(axiosApi){
        this.axiosApi = axiosApi;
    }

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
}

export default CRUDService;
  