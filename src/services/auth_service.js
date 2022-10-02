import { setRefreshToken, getRefreshToken, removeRefreshToken } from "./cookie.js";

class AuthService {
    constructor(axiosApi){
        this.axiosApi = axiosApi;
    }

    login({ email, password }, onLogin, printErrorMessage) {
        const data = {
            email,
            password,
        };
        
        this.axiosApi.post("/account/login/", data)
            .then(response => {
                const { access_token, refresh_token } = response.data.jwt_token;
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                this.axiosApi.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                // Refresh Token 저장
                setRefreshToken(refresh_token);

                const userData = response.data.user
                onLogin(userData);
            })
            .catch(error => {
                if(error.response.data.non_field_errors[0] === "wrong password"){
                    printErrorMessage("password", "비밀번호를 다시 확인해주세요");
                }
                else{
                    printErrorMessage("email", "이메일을 다시 확인해주세요");
                };
            })
    }

    logout(onLogout) {
        const refresh_token = getRefreshToken();

        const data = {
            refresh_token
        };

        this.axiosApi.post("/account/logout/", data)
        .then(response => {
                removeRefreshToken();
                onLogout();
            })
            .catch(error => {
                console.log(error);
            })
    }

    signup({ email, password, username, phone_number, birth }, onSignup, printErrorMessage){
        const data = {
            email,
            password,
            username,
            birth,
            phone_number
        };

        this.axiosApi.post("/account/signup/", data)
            .then(response => {
                const { access_token, refresh_token } = response.data.jwt_token;
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                this.axiosApi.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                // Refresh Token 저장
                setRefreshToken(refresh_token);
                
                const userData = response.data.user
                onSignup(userData);
            })
            .catch(error => {
                const errorData = error.response.data;
                if(errorData.birth){
                    printErrorMessage("birth", "생년월일을 정확히 입력해주세요");
                }
                else if(errorData.phone_number){
                    printErrorMessage("phoneNumber", "이 번호를 사용중인 유저가 있습니다");
                }
            })
    }
    // access_token 만료시 refresh_token으로 새 access_token을 발급받는 함수
    getAccessToken(){
        const refresh_token = getRefreshToken();
        // 더 구현을 해야 함
    }

    async checkUsername(username){
        const data = {
            username
        };
        
        let checkResult;

        await this.axiosApi.post(`${process.env.REACT_APP_BASE_API_URL}/account/username-validate/`, data)
            .then(response => {
                checkResult = true;
            })
            .catch(error => {
                checkResult = false;
            })
        
        return checkResult;
    }
}

export default AuthService;
  