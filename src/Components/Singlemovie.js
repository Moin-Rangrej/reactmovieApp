import React , { useState }  from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from './Context';

function Singlemovie() {
  const {id} = useParams();
 const { isLoading } = useGlobalContext()
  // console.log("from Singlemovie app" , props.Mymovie[1]);
  console.log(id);
  if (isLoading) {
    return(
      <div className='movie-section'>
        <div className='loading'>Loading ....
        </div>
      </div>
    )
  }

  return (
    <>
      <div>Hello fro Single Movie{id}</div>
    </>
  );
}


export default Singlemovie