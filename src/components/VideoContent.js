import React from "react";
import ReactPlayer from "react-player";
import './VideoContent.css'



class VideoContent extends React.Component {
    
    render() {
        return (
            <section className="VideoContent container">
                <ReactPlayer className="video" url="https://youtu.be/nqye02H_H6I"/>
                <ReactPlayer className="video" url="https://youtu.be/7sDY4m8KNLc"/>
                <ReactPlayer className="video" url="https://youtu.be/F5e9rZg0CjI"/>
        
            </section>
            
        )
    }
}

export default VideoContent