import axios from 'axios';


const KEY =  'AIzaSyBYWhLo85aWCtXCKCMORWD67SGOguf550g';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }    
});
