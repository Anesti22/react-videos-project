import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return <a href="#root" onClick={()=> onVideoSelect(video)} >
                <div className="item video-item">
                    <img className="ui image large" alt={'Hello'} src={video.snippet.thumbnails.medium.url}/>
            
                    <div className="content"> 
                        <div className="header"><h4>{video.snippet.title}</h4></div>
                    </div>
                </div>
            </a>
    
}

export default VideoItem;