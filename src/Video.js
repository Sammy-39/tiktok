import React, {useRef, useState} from 'react'

import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import "./video.css"

const Video = ({videoUrl, channel, 
    description, song, likes, messages, shares}) => {
    const videoRef = useRef(null)

    const [playing,setPlaying] = useState(false)

    const handleVideoPlay = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }
        else{
            videoRef.current.play()
            setPlaying(true)
        }
    }

    const handleScroll = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }
    }

    return (
        <div className="video">
            <video className="video_player"
             loop
             ref={videoRef}
             onClick={handleVideoPlay}
             src={videoUrl}
             type="video/mp4"
             onWheel={handleScroll} >
            </video>

            <VideoFooter channel={channel} 
             description={description} 
             song={song}/>

            <VideoSidebar likes={likes} messages={messages} 
             shares={shares} />
        </div>
    )
}

export default Video
