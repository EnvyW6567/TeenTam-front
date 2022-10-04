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
}

export default CRUDService;
  