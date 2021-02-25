import {useState ,useEffect} from "react"

import Video from './Video';
import './app.css';


function App() {

  const [videoData,setVideoData] = useState([])

  const getData = async ()=>{
    const res = await fetch('https://tiktok-backend-api.herokuapp.com/v2/posts')
    const resData = await res.json()
    setVideoData(resData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="app">
      <div className="app_videos">
        {
          videoData.map((data,idx)=>(
            <Video key={idx} 
                   channel={data.channel}
                   description={data.description}
                   videoUrl={data.videoUrl}
                   song={data.song}
                   likes={data.likes} 
                   messages={data.messages}
                   shares={data.shares} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
