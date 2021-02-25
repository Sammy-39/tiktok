import {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'

import "./videoSidebar.css"

const VideoSidebar = ({likes,messages,shares}) =>{

    const [liked,setLiked] = useState(false)


    return (
        <div className="videoSidebar">
            <div className="videoSidebar_button">
                {liked ? <FavoriteIcon style={{color:"orangered"}} onClick={()=>setLiked(false)} /> :
                    <FavoriteBorderIcon onClick={()=>setLiked(true)} /> 
                }
                <p> {liked ? likes+1 : likes} </p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon  />
                <p> {messages} </p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon  />
                <p> {shares} </p>
            </div>
        </div>
    )
}

export default VideoSidebar
