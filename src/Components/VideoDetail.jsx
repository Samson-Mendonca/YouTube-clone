import React, { useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography,Box,Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './'
import { FetchData } from '../utils/FetchData';


const VideoDetail = () => {
  
  const [Videos, setVideos] = useState(null);
  const {id} = useParams();
  
  return (
  <Box minHeight="95vh">
    <Stack direction={{xs:'column',md:'row'}}>
      <Box flex={1}>
        <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
         
        </Box>
      
      </Box>
    </Stack>
  </Box>
  )
}

export default VideoDetail