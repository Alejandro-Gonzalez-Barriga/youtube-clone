import React from 'react';

import {Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {//{video} is props in a destructured format
  if(!video) return <div>Loading...</div>
  //using templete literals we will fetch the data dinamically and
  //store it in variable to use it in the iframe tag
  console.log(video)
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return(
    <React.Fragment>
      <Paper elevation={6} style={{height: '80%' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc} />
      </Paper>
      <Paper elevation={6} style={{padding: '15px'}}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  )
}

export default VideoDetail;
