import React from "react";
import './VisualContent.css'
import VideoContent from './VideoContent'

const images = document.getElementsByClassName(".images")






function VisualContent() {
    const buttonShow = document.getElementsByClassName(".buttonShow")


    return (
        <section className="container">
            <div className="images">
                <img id="img1" src="http://images4.fanpop.com/image/photos/22000000/Kitties-cats-22092221-500-374.jpg" alt="" 
                 />
                <img id="img2" src="https://i.pinimg.com/originals/be/48/f5/be48f574a34840c8d3a2be5a7fabd8d2.jpg" alt="" 
                />
                <img id="img3" src="https://pbs.twimg.com/media/EKNRl9BWkAUCuIb.jpg" alt="" />
            </div>
            <VideoContent />

        </section>
    )
}

export default VisualContent