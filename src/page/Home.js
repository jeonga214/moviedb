import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../App.scss';
import "swiper/css";
import { Link } from "react-router-dom";

function Home({data,data2,data3,tvdata,tvdata2}) {
    if (!data) {
        return <p>Loading...</p>;
    }
    if (!data.results) {
        return <p>No results found.</p>;
    }

    if (!data2) {
        return <p>Loading...</p>;
    }
    if (!data2.results) {
        return <p>No results found.</p>;
    }

    if (!data3) {
        return <p>Loading...</p>;
    }
    if (!data3.results) {
        return <p>No results found.</p>;
    }

  return (
    <>
    <div className='silde'>
        <Swiper className="mySwiper">
            {data.results.map(item => (
                <SwiperSlide key={item.id}>
                    <div className='mainsilde' 
                        style={{
                            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
                            backgroundSize: '100%',
                            backgroundRepeat:'no-repeat',
                        }}>
                        <div className='mainsilde_left'>
                            <div>{item.original_title}</div>
                            <div>{item.overview}</div>
                            <Link to ={`/movie/${item.id}`}>
                                <p>Watch now</p>
                            </Link>
                            <Link>
                                <p>Watch trailer</p>
                            </Link>
                        </div>
                        <div className='mainsilde_right'>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>

    <div className="movies">

        <div className="upcoming">
            <div>
                <h3>Trending Movies</h3>
                <Link to="/movie">view more</Link>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                {data.results.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="upcoming_con">
                            <Link to ={`/movie/${item.id}`}>
                                <div className="hoverred">
                                    <div className="img_whole">
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                                    </div>
                                    <div className="hoverbutton">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        {/* <div className="upcoming">
            <div>
                <h3>Upcoming Movies</h3>
                <Link to="/movie">view more</Link>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                {data2.results.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="upcoming_con">
                            <Link to ={`/movie/${item.id}`}>
                                <div className="hoverred">
                                    <div className="img_whole">
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                                    </div>
                                    <div className="hoverbutton">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <h4>{item.original_title}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> */}

        <div className="upcoming">
            <div>
                <h3>Top rated Movies</h3>
                <Link to="/movie">view more</Link>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                {data3.results.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="upcoming_con">
                            <Link to ={`/movie/${item.id}`}>
                                <div className="hoverred">
                                    <div className="img_whole">
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                                    </div>
                                    <div className="hoverbutton">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 6v12l10-6z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <h4>{item.title}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    </div>

    <div className="tv_series">
        <div className="upcoming">
            <div>
                <h3>Trending Tv</h3>
                <Link to="/tv">view more</Link>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                {tvdata.results.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="upcoming_con">
                            <Link to ={`/tv/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                                <h4>{item.name}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className="upcoming">
            <div>
                <h3>Top Rated Tv</h3>
                <Link to="/tv">view more</Link>
            </div>
            <Swiper
                slidesPerView={6.5}
                spaceBetween={10}
                pagination={{
                clickable: true,
                }}
                className="mySwiper"
            >
                {tvdata2.results.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="upcoming_con">
                            <Link to ={`/tv/${item.id}`}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.original_title} />
                                <h4>{item.name}</h4>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
    </>
  )
}

export default Home