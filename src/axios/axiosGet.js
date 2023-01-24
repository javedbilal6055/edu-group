import axios from 'axios';

function axiosGet(props) {
    // const URL = "http://15.207.248.223:3000";
    const URL = "http://localhost:3000";
    const path = props.path || '';
    const AuthStr = props?.type === "institute" ? localStorage.getItem('institute_access_token') : localStorage.getItem('access_token') || '';
    
    const headers = {
        'headers': { 'Authorization': AuthStr }
    }    
    const response = axios.get(URL + path, headers)
        .then(res => {
            return res;
        })    
    return response;
}

export default axiosGet;
