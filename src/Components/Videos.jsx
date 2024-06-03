import React from 'react'
import { Box, Stack,Typography } from '@mui/material';
import { VideoCard, Loader, ChannelCard } from './'
const Videos = ({ Videos, direction }) => {
  if(!Videos?.length) return <Loader/>;
  return (
    <Stack direction={direction || "row"} flexWrap="wrap"
     justifyContent='start' gap={2}>
        {Videos.map((item,index) => (
            <Box key={index} >
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos