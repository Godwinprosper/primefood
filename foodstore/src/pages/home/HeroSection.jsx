import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroSection.css'

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Fresh Food Delivered to Your Doorstep</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, dolor facilis quibusdam officiis vitae culpa reiciendis ducimus laboriosam inventore perferendis cupiditate </p>
        <button className="shop-now-button">Oder Now</button>
      </div>
      <div className='swiper-section'>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          direction="horizontal"
          loop={true}
          autoplay={{ delay: 5000 }}
          spaceBetween={50}
          slidesPerView={1}

          lazy={true.toString()}
          lazyPreloaderClass='swiper-lazy-preloader'
          lazyPreloadPrevNext={1}
          
          className='swiper-hero-container'
        >
          <SwiperSlide className='hero-slide'>
            <img loading='lazy' src="heroImage/rice.png" alt="Delicious Food 1" />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide className='hero-slide'>
            <img loading='lazy' src="heroImage/jellof.png" alt="Delicious Food 1" />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide className='hero-slide'>
            <img loading='lazy' src="heroImage/burger.png" alt="Delicious Food 1" />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>
          <SwiperSlide className='hero-slide'>
            <img loading='lazy' src="heroImage/drinks.png" alt="Delicious Food 1" />
            <div className="swiper-lazy-preloader"></div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}