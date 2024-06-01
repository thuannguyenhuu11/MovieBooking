'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;

const HomeSlider = () => {
  const [banners, setBanners] = useState([
    {
      imgUrl:
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg',
    },
    {
      imgUrl:
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1717160353306_badboysapp1240x300.jpg',
    },
  ]);

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      {banners.map((banner, index) => {
        return (
          <SwiperSlide key={index}>
            <Image
              src={banner.imgUrl}
              alt=""
              width={width}
              height={height / 2}
              className="object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeSlider;
