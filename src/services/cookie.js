import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refresh_token) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    cookies.set('refresh_token', refresh_token, { 
        sameSite: 'strict', 
        path: "/", 
        expires: new Date(expireDate),
        // secure : true,
        // httpOnly : true
    });
};

export const getRefreshToken = () => {
    const refresh_token = cookies.get('refresh_token');
    return refresh_token;
};

export const removeRefreshToken = () => {
    cookies.remove('refresh_token');
}