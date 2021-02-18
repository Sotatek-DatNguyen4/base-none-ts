import axios from 'axios';

class Request {
  instance;
  constructor() {
    const instance = axios.create({
      //baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        //Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      }
    });
    this.instance = instance;
  };

  get = (url) => {
    return this.instance.get(url);
  };

  post = (url, data) => {
    return this.instance.post(url, data);
  };

  put = (url, data) => {
    return this.instance.put(url, data);
  };

  delete = (url) => {
    return this.instance.delete(url);
  };
}

export default new Request();