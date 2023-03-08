import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from 'react-bootstrap/esm/Button'
// import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './Context'
import MovieInformation from './MovieInformation'
import Singlemovie from './Singlemovie'
// import Singlemovie from './Singlemovie'


const Movie = () => {
  const { movie , isLoading } = useGlobalContext()
  if (isLoading) {
    return(
      <div className='movie-section'>
        <div className='loading'>Loading ....
        </div>
      </div>
    )
  }
  else{
  return (
    <div className='container grid grid-4-col'>
      {movie.map((moviedata) => { 
        const {imdbID,Poster,Title,Year} = moviedata
        return <div key={imdbID}>
          <div className="card">
            <img src={Poster} alt="Card image cap" />
              <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p className="card-text">Movie Year:{Year}</p>
                <p><MovieInformation movieData={movie}/></p>
              </div>
          </div>
        </div>
      })}
    </div>

    // <section className='movie-page'>
    //   <div className='container grid grid-4-col'>
    //     {movie.map((curMovie) => {
    //       const {imdbID,Poster,Title} = curMovie
    //       return(
    //         <div key={imdbID}>
    //         <NavLink to={`movie/${imdbID}`} >
    //           <div className='card-info'>
    //           <h2>{Title.slice(0 , 15).toUpperCase().length>15?`${Title}... `: Title}</h2>
    //           <img src={Poster} alt={imdbID}/>
    //           </div>
    //         </NavLink>
    //         <Button><Singlemovie Mymovie={movie}/></Button>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </section>

  )
      }
}

export default Movie



