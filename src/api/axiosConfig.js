import axios from 'axios';

export default axios.create({
    baseURL: 'localhost:3000',
    //headers: {"ngrok-skip-browser-warning": "true"}
});