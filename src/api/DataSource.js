import axios from 'axios';

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        Authorization: 'Bearer 8f7132ccd0854b3a9c66b2ddb05e6f17'
    } 
});