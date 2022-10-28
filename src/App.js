
import { useState } from 'react';

import './App.css';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core'

//components
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState({id:{}, snippet:{}})


  async function handleSubmit(searchItem){
    const {data: {items: videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyD9R6SyA5ksl-lOscoxTQ3iAD27K4QE0tI",
        q: searchItem,
      }
    })
    setVideos(videos)
    setSelectedVideo(videos[0])
    
  }

  return (
    <Grid style={{ justifyContent: "center"}} container spacing={10}>
      <Grid item xs = {11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit = {handleSubmit} /> 
          </Grid>
          <Grid item xs={8}>
             <VideoDetail video = {selectedVideo} /> 
          </Grid>
          <Grid item xs={4}>
              <VideoList videos= {videos} onVideoSelect = {setSelectedVideo}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );


}

export default App;
