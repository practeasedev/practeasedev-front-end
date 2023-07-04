import { access } from 'fs';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const checkIfLoggedIn = () => {
    const accessToken = Cookies.get('accessToken');
    return accessToken ? true : false;
}

export const getLoggedInUserDetails = () => {
    const accessToken = Cookies.get('accessToken');
    const decodedToken = accessToken ? jwtDecode(accessToken) : null;
    return decodedToken;
}