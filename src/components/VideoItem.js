import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
    const style = {
        cursor: 'pointer'
    }
    return (
        <li onClick={() => onVideoSelect(video)} className="media" style={style}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="mr-3" />
            <div className="media-body">
                <h5 className="mt-0 mb-1"><strong>{video.snippet.title}</strong></h5>
            </div>
        </li>

    );
}
export default VideoItem;