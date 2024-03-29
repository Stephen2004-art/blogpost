import Axios from 'axios';
import Cookies from 'js-cookie';

let token = Cookies.get('adminToken')

const instance = Axios.create({
    baseURL: 'http://localhost:5001',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default instance