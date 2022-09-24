import axios from 'axios';

axios.defaults.withCredentials = true;

class AuthService {
    login(email, password) {
        const data = {
            email,
            password,
        };

        axios.post(`${process.env.REACT_APP_POSTMAN_URL}/login`, data)
            .then(response => {
                const { access_token } = response.data.jwt_token;
                // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
                axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
            })
            .catch(error => {
                console.log(error);
            })
    }

    logout() {
        console.log("로그아웃");
    }
}

export default AuthService;
  