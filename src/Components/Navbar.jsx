import { Link } from 'react-router-dom';
import logo from '/yt_icon.svg';
import { Box, Stack } from '@mui/material'
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    
    <Stack
    direction="row"
     alignItems="center"
      p={2} 
      sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}}>
        <Link to="/" style={ {display:'flex',alignItems:'center'}}>
          <img src={logo} alt="logo" height={50} />
        </Link>
        <div className='search-div'><SearchBar/></div>

    </Stack>
  )
}

export default Navbar