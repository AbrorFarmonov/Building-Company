'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import image_first from '../app/assets/project-one.png'
import image_second from '../app/assets/project-two.png'

import '../app/styles/slider.scss';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={image_first} alt='preview of job that we have done'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={image_second} alt='preview of job that we have done'/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
