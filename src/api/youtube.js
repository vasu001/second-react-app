import axios from 'axios';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'YOUTUBE_API_KEY'
    }
});

export default youtube;