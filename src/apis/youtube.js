import axios from 'axios';


const KEY =  'AIzaSyAqg4_Xbp-muFUTriYMOZJbz7NUPAhQ_PM';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }    
});
