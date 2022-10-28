import { Grid } from '@material-ui/core'
import VideoItem from './VideoItem'

export default function VideoList({ videos, onVideoSelect }){

    const listOfVideos = videos.map((video) => (
       
        <VideoItem 
            onSelectVideo = {onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
       
    ))
    return(
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}