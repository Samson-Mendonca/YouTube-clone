import { BrowserRouter,Route,Routes } from "react-router-dom"
import { Box, } from "@mui/material"
import { Navbar,Feed,VideoDetail, SearchFeed,ChannelDetail} from './Components'
function App() {

  return (
<BrowserRouter>
<Box>
  <Navbar/>
  <Routes>
    <Route path="/" exact element={<Feed />} />
    <Route path="/video/:id"  element={<VideoDetail />}/>
    <Route path="/channel/:id"  element={<ChannelDetail />}/>
    <Route path="/search/:searchTerm"  element={<SearchFeed />}/>
  </Routes>
</Box>
</BrowserRouter>
  )
}

export default App
