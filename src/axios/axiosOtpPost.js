import axios from "axios";

function axiosOtpPost(props) {
  const URL = `https://www.fast2sms.com/dev/bulkV2?authorization=bkHDKcJXr9GuyFEjx4zismlIteAMNg1QVO6PvndW2SaqfL38UZdXTt9UQjPg6BxZrv0O2ANEc8w1YVpm&route=q&message=${`Required otp for registration is ${props.otp}`}&language=english&flash=0&numbers=${props.numbers}`;

  const response = axios.get(URL).then((res) => {
    return res;
  });

  return response;
}

export default axiosOtpPost;