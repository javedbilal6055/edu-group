import axios from "axios";

function axiosPut(props) {
  // const URL = "http://15.207.248.223:3000";
  const URL = "http://localhsot:3000";
  const path = props.path || "";
  const data = props.data;
  const AuthStr = props?.type === "institute" ? localStorage.getItem('institute_access_token') : localStorage.getItem('access_token') || '';
  const headers = {
    'headers': { 'Authorization': AuthStr }
  }

  const response = axios.put(URL + path, data, headers).then((res) => {
    return res;
  });

  return response;
}

export default axiosPut;
