import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TvDetail() {
  const [tv, setTv] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // API 호출을 수행하여 영화 상세 정보를 가져오는 부분
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f89a6c1f22aca3858a4ae7aef10de967`)
      .then(response => {
        setTv(response.data);
      })
      .catch(error => {
        console.error('Error fetching tv data:', error);
      });
  }, [id]);

  if (!tv) {
    return <p>Loading...</p>;
  }

  return (
    <>
        <div className='banner' 
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
                backgroundPosition:'50%',
                backgroundSize: 'cover',
                backgroundRepeat:'no-repeat',
            }}>
        </div>
        <div className='movie_detail'>
            <div className='movie_detail_left'>
                <img src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`} alt={tv.original_title} />
            </div>
            <div className='movie_detail_right'>
                <h1>{tv.name}</h1>
                <div className='detail_button'>
                    {tv.genres.map(item => (
                        <span key={item.id}>
                            {item.name}
                        </span>
                    ))}
                </div>
                <p>{tv.overview}</p>
            </div>
        </div>
    </>
  );
}

export default TvDetail;
