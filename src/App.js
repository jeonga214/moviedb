
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import axios from 'axios';
import Movies from './page/Movies';
import Tv from './page/Tv';
import { useEffect, useState } from 'react';
import { param } from 'jquery';
import MovieDetail from './page/MovieDetail';
import TvDetail from './page/TvDetail';

function App() {

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [tvdata, tvsetData] = useState([]);
  const [tvdata2, tvsetData2] = useState([]);

  useEffect(() => {
    axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967'
      )
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });


    axios.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=f89a6c1f22aca3858a4ae7aef10de967'
      )
      .then(response => {
        setData2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });


    axios.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967'
      )
      .then(response => {
        setData3(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });



    axios.get(
      'https://api.themoviedb.org/3/tv/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967'
      )
      .then(response => {
        tvsetData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=f89a6c1f22aca3858a4ae7aef10de967'
      )
      .then(response => {
        tvsetData2(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  if (!data || !data2 || !data3 || !tvdata || !tvdata2) {
    return <p>Loading...</p>;
  }

  return (
    <BrowserRouter basename='/movied/'>
      <header>
        <div className='head'>
          <div>
            <Link to="/">YFLIX</Link>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movie">Movies</Link>
            <Link to="/tv">TV Series</Link>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home data={data} data2={data2} data3={data3} tvdata={tvdata} tvdata2={tvdata2}/>} />
          <Route path="/movie" element={<Movies data={data}/>} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
