import axios from 'axios';

const unsplashConf = axios.create ({
      baseURL: 'https://api.unsplash.com',
      headers: {
        Authorization: 'Client-ID FqhDNgATlJM-IK3syMT1x22ctKp9OjwHrxOuL4vrT8U',
      }
    });

  export default unsplashConf 