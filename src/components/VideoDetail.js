import React from 'react';

const VideoDetails = ({ video }) => {

    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="mt-3">
            <div className="row">
                <div className="col-12 mx-auto text-justify">
                    <div className="card p-2">
                        <div className="card-body">
                            <iframe title="video player" width="100%" height="400" src={videoSrc} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="card-body">
                            <div className="media-body">
                                <h6 className="mt-0 mb-1"><strong>{video.snippet.title}</strong></h6>
                                {video.snippet.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default VideoDetails;