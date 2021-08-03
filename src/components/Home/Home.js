import React from 'react';
import NavBar from '../NavBar';
import MovieGrid from '../MovieGrid';

const Home= ()=>{
  return (
    <div id="homeContainer">
      <h1>MOVIES</h1>
      <NavBar />
      <hr></hr>
      <MovieGrid />
    </div>
    )
}

export default Home;