import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card ,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl, demoVideoTitle,demoChannelTitle,demoChannelUrl  } from '../utils/constants';
const VideoCard = ({video:{ id:{
    videoId},snippet}}) => {
   
  return (
   
  <Card sx={{ width:{md:'320px',xs:'100%'},boxShadow:'none',borderRadius:4}} >
    <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url}
     alt={snippet?.title}
     sx={{width:358,height:180}}/>
    </Link>
    <CardContent sx={{backgroundColor:'#1e1e1e',height:'106px'}}>
    <Link to={videoId? `/video/${videoId}`:demoVideoUrl} style={{textDecoration:'none'}}>
        <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
            {snippet?.title || demoVideoTitle}
        </Typography>
    </Link>
    <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl} style={{textDecoration:'none'}}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12, color:'gray', ml: '5px'}}/>
        </Typography>
    </Link>
    </CardContent>
  </Card>
  )
}

export default VideoCard