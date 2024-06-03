import React, { useState, useEffect } from 'react';
import { Box, Stack,Typography } from '@mui/material';
import { Height } from '@mui/icons-material';
import { SideBar, Videos } from './';
import { FetchData } from '../utils/FetchData';
const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    setvideos(null);

    FetchData(`search?part=snippet&id=${selectedCategory}`)
      .then((data) => setvideos(data.items))
      
    }, [selectedCategory]);
   

  return (

    <Stack sx={{flexDirection:{sx:'column',md:'row'},background:'#000'}} >
        <Box sx={{borderRight: '1px solid #3d3d3d',px:{sx:0,md: 2 }}} height="auto">
        <SideBar selectedCategory= {selectedCategory} setselectedCategory={setselectedCategory}/>

          
        </Box>
        <Box p={2} sx={{overflowY:'auto',
          height:'90vh',flex: 2
        }}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{
            color:'white'
          }}>
            {selectedCategory} <span style={{color:'#f31503'}}>
              videos
            </span>
          </Typography>
          <Videos Videos={videos}/>
        </Box>
    </Stack>


  )
}

export default Feed