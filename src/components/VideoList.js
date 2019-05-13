import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videos = props.videos.map(video => {
        return (
            <ul key={video.id.videoId || video.id.channelId} className="list-unstyled">
                <VideoItem onVideoSelect={props.onVideoSelect} video={video} />
            </ul>
        );
    });
    return (
        <div className="mt-3">
            <div className="row">
                <div className="col-12 mx-auto text-justify">
                    {videos}
                </div>
            </div>
        </div>
    );

}

export default VideoList;