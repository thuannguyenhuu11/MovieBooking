'use client';
import React from 'react';
import { BsShare, BsFillStarFill } from 'react-icons/bs';
import './MoviePage.css';
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';

const MoviePage = () => {
  const movie = {
    wideposter:
      'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/savi-a-bloody-housewife-et00397136-1716361720.jpg',
    portraitposter:
      'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/savi-a-bloody-housewife-et00397136-1716361720.jpg',
    title: 'Savi',
    ratting: 8.5,
    halls: ['2D', '3D'],
    languages: ['Telugu', 'Hindi', 'English'],
    duration: '2h 30m',
    type: 'Action',
    releasedate: 'June 1, 2024',
    cast: [
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
    ],
    crew: [
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
      {
        _id: '1',
        name: 'Tom Holland',
        role: 'Actor',
        imageUrl:
          'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/anil-kapoor-176-12-09-2017-07-42-36.jpg',
      },
    ],
    about:
      'Savi, a simple housewife, attempts a daring jailbreak to get her husband out of one of England`s high-security prisons consisting of 400 inmates, 75 armed guards, and 60 surveillance cameras.',
  };

  return (
    <div className="moviepage">
      <div
        className="c1"
        style={{ backgroundImage: `url(${movie.wideposter})` }}
      >
        <div className="c11">
          <div className="left">
            <div
              className="movie_poster"
              style={{ backgroundImage: `url(${movie.portraitposter})` }}
            >
              <p>In cinemas</p>
            </div>

            <div className="movie_details">
              <p className="title">{movie.title}</p>
              <p className="rating">
                <BsFillStarFill className="start" />
                &nbsp;&nbsp;{movie.ratting}/10
              </p>
              <div className="halls_languages">
                <p className="halls">
                  {movie.halls.map((hall, index) => {
                    return <span key={index}>{hall} </span>;
                  })}
                </p>

                <p className="languages">
                  {movie.languages.map((language, index) => {
                    return <span key={index}>{language} </span>;
                  })}
                </p>
              </div>

              <p className="duration_type_releasedat">
                <span className="duration_type_releasedat">
                  {movie.duration}
                </span>
                <span>•</span>
                <span className="type">{movie.type}</span>
                <span>•</span>
                <span className="releasedat">{movie.releasedate}</span>
              </p>

              <button className="bookbtn">Book Tickets</button>
            </div>
          </div>

          <div className="right">
            <button className="sharebtn">
              <BsShare className="shareicon" />
              Share
            </button>
          </div>
        </div>
      </div>
      <div className="c2">
        <h1>About the Movie</h1>
        <p>{movie.about}</p>
        <div className="line"></div>
        <h1>Cast</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              '@1.50': {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.cast.map((cast, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...cast} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>

        <h1>Crew</h1>
        <div className="circlecardslider">
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 2,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 2,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              '@1.50': {
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {movie.crew.map((crew, index) => {
              return (
                <SwiperSlide key={index}>
                  <CelebCard {...crew} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="line"></div>
        <h1>Your might also like</h1>
        <MovieCarousel />
      </div>
    </div>
  );
};

export default MoviePage;
