import axios from 'axios';
import serverUrl from './utils/serverUrl';

const instance = axios.create({
  baseURL: serverUrl
});

export default instance;