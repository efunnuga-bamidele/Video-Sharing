import { Paper, Typography } from '@material-ui/core'


export default function VideoDetail({ video: {id: {videoId}, snippet: {title, channelTitle, description}} }){

    const videoSrc = `https://www.youtube.com/embed/${videoId}`

    return(
       <>
        {!videoId && <div>Loading...</div>}
        {videoId &&
            <>
            <Paper elevation={6} style={{height: "80%"}}>
            <iframe 
                frameBorder="0"
                height="100%"
                width ="100%"
                title="Video Player"
                src = {videoSrc}
            />
            
            </Paper>
            <Paper elevation={6} style={{ padding: "15px"}}>
                <Typography variant="h5">
                    {title} - {channelTitle}
                </Typography>
                <Typography variant="subtitle1">
                     {channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                    {description}
                </Typography>
            </Paper>
            </>
        }
       </>
    )
}