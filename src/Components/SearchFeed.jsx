import React, { useState, useEffect } from 'react';
import { Box,Typography } from '@mui/material';
import { Height } from '@mui/icons-material';
import {  Videos } from './';
import { FetchData } from '../utils/FetchData';
import { useParams } from 'react-router-dom';
const SearchFeed = () => {
  
  const [videos, setvideos] = useState([]);
  const{searchTerm} =useParams();
  useEffect(() => {
    

    FetchData(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setvideos(data.items))
    }, [searchTerm]);
   

  return (
<Box p={2} sx={{overflowY:'auto',
          height:'90vh',flex: 2
        }}>
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{
            color:'white'
          }}>
            Search Results for: <span style={{color:'#f31503'}}>
            {searchTerm}
            </span>
          </Typography>
          <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos Videos={videos}/>}
      </Box>
        </Box>


  )
}

export default SearchFeed;