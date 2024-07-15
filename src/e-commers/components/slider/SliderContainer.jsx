import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../style.css';
import { SlideCard } from './SlideCard';

export function SliderContainer ({ categories }) {
    return (
        <Swiper
            breakpoints={{
                375: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    centeredSlides: true
                },
                640: {
                    spaceBetween: 10,
                    slidesPerView: 1,
                    centeredSlides: true
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                    centeredSlides: true
                },
                1024: {
                    spaceBetween: 25,
                    slidesPerView: 3,
                    centeredSlides: true
                },
            }}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{
                dynamicBullets: true
            }}
            modules={[Navigation, Pagination, EffectCoverflow]}
            effect='coverflow'
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }}
            className='mySwiper mt-10'
        >
            {
                categories?.map(category => (
                    <SwiperSlide key={category.id}>
                        <SlideCard category={category} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

SliderContainer.propTypes = {
    categories: PropTypes.array
}