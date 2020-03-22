import axios from 'axios';


const KEY =  'AIzaSyBx8ly4expN7HyV--Wy0tfm-F4GvoU1heU';


export default axios.create({ 
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }    
});
