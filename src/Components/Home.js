import Search from './Search'
import Movie from './Movie'
import { Routes,Route } from 'react-router-dom'
import Singlemovie from './Singlemovie'
import Error from './Error'
import { Mylogo } from '../GIF/Img'

const Home = () => {   
  const homeHeader = {
    height : "100px",
    width: "100%",
    backgroundColor: "lightblue",
    boxShadow: "0 2px 4px 0 black",
    position: "sticky",
    padding: "10px",
  }
  return (
    <div style={homeHeader}>
    <h1>My Home Page</h1>
    <img src={Mylogo} />
      <Search />
      <Movie />
      {/* <Routes>
        <Route path='movie/:id' element={<Singlemovie />}>Singlemovie</Route>
        <Route path='*' element={<Error />}/>
      </Routes> */}
    </div>
  )
}

export default Home

// http://www.omdbapi.com/?apikey=235e9b78&s=titanic