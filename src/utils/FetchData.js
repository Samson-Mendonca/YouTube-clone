import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
   
    url: BASE_URL,
    params: {
    
      maxResults: '50',
     
    },
    headers: {
      'X-RapidAPI-Key':'5dc4379b64msh935c2e8c9fa4072p145927jsn4e7aceb35b90' ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const FetchData = async(url)=>{
      const {data}   =    await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }