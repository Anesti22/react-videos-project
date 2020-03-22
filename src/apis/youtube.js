import axios from 'axios';


const KEY =  'AIzaSyBooV5lgSv30uekpoQph5jbUWmX3vF3Tos';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }    
});
