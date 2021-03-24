import Axios from './Axios';

const authToken = (token: string) => {
    if(token) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete Axios.defaults.headers.common['Authorization'];
    }
}

export default authToken;