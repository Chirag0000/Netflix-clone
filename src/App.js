import React from 'react';
import './App.css';
import Header from './Header.js';
import Banner from './Banner.js';
import requests from './requests.js';
import Row from './Row.js';

function App() {
  return <div className="App">
    <Header />
    <Banner />
    <requests />
    <Row 
    isLargeRow={true}
    title="NETFLIX ORIGINAL"
    fetchUrl={requests.fetchNetFlixOriginals}
    />
    <Row 
    title="TRENDING NOW"
    fetchUrl={requests.fetchTrending}
    />
    <Row 
    title="TOP RATED"
    fetchUrl={requests.fetchTopRated}
    />
    <Row 
    title="ACTION MOVIES"
    fetchUrl={requests.fetchActionMovies}
    />
    <Row 
    title="COMEDY MOVIES"
    fetchUrl={requests.fetchComedyMovies}
    />
   <Row 
    title="HORROR MOVIES"
    fetchUrl={requests.fetchHorroMovies}
    />
    <Row 
    title="ROMANTIC MOVIES"
    fetchUrl={requests.fetchRomanticMovies}
    />

    </div>;
}

export default App;
