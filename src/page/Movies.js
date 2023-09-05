import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // 검색 API 엔드포인트
  const searchApiUrl = 'https://api.themoviedb.org/3/search/movie';
  // 인기 영화 목록 API 엔드포인트
  const popularApiUrl = 'https://api.themoviedb.org/3/movie/popular';

  // useHistory 훅을 사용하여 history 객체를 가져옴
  const navigate = useNavigate();

  useEffect(() => {
    let apiUrl = '';

    if (searchQuery) {
      apiUrl = `${searchApiUrl}?api_key=f89a6c1f22aca3858a4ae7aef10de967&query=${searchQuery}&page=${pageNum}`;
    } else {
      apiUrl = `${popularApiUrl}?api_key=f89a6c1f22aca3858a4ae7aef10de967&page=${pageNum}`;
    }

    axios.get(apiUrl)
      .then(response => {
        if (pageNum === 1) {
          setMovies(response.data.results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...response.data.results]);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    // 검색어를 파라미터로 추가하여 URL을 업데이트
    navigate(`?search=${searchQuery}`);
  }, [pageNum, searchQuery, navigate]);

  function loadMore() {
    setPageNum(prevPageNum => prevPageNum + 1);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  function handleSearch() {
    // 검색 버튼 클릭 시 페이지 번호를 초기화하고 새로운 검색 시작
    setPageNum(1);
  }

  return (
    <div className='movie_whole'>
      <div className='movie_title'>Movies</div>
      <div className='movie_consear'>
        <div className='search'>
          <input
            type='text'
            placeholder="Enter keyword"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className='movie_con'>
          <div className="upcoming">
            {movies.map(movie => (
              <div className='aa' key={movie.id}>
                <div className="upcoming_con">
                  <Link to={`/movie/${movie.id}`}>
                    <div className="hoverred">
                      <div className="img_whole">
                        <div className='back'
                          style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                            backgroundPosition: '50%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                          }}>
                        </div>
                      </div>
                      <div className="hoverbutton">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>
                        </div>
                      </div>
                    </div>
                    <h4>{movie.title}</h4>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className='more'>
            <p onClick={loadMore}>Load more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies;
