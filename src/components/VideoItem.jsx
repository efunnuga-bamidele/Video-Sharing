import { Grid, Paper, Typography } from '@material-ui/core'

export default function VideoItem( {onSelectVideo, video}) {
  return (
        <Grid item xs={12}>
            <Paper 
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={ () => onSelectVideo(video)}
            >
                <img style={{ margin: "auto", width:"auto", height:"auto"}} src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
               
            </Paper>
            <Paper
            style={{ display: "flex", textAlign: "center", cursor: "pointer" }}
            onClick={ () => onSelectVideo(video)}
            >
                <Typography variant='subtitle1'>
                    <b>{video.snippet.title}</b>
                </Typography>
            </Paper>

        </Grid>
  )
}
