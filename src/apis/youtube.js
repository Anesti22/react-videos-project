import axios from 'axios';



const KEY =  'AIzaSyDoGXRH-NSAo8QgBhbRPs1brer1-CgAI2U';
// const KEY =  'AIzaSyBYWhLo85aWCtXCKCMORWD67SGOguf550g';
// const KEY =  'AIzaSyDB63CSNJRcYHZQj7DlygHP6FfHDNLqm5Q';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }    
});
