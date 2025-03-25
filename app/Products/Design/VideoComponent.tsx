import React from "react";

const VideoComponent = () => {
    return (
        <video
            className="w-full max-w-[800px] md:max-w-[1000px] xl:max-w-[1200px] rounded-xl shadow-2xl"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/video-placeholder.jpg"
        >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoComponent;
