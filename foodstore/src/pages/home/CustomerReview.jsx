import { customerReviews } from '../../Data/customerReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CustomerReview.css';

export function CustomerReview() {
  return (
    <section className="customer-review-section">
      <div className='customer-review-title'>
        What Our Customers Say
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        direction="horizontal"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={
          {
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            
          }
        }
        className="swiper-reviews-container"
      >
        {customerReviews.map((review) => {
          return (
            <SwiperSlide key={review.id} >
              <div className="review-card">
                <p>
                  {review.review}
                </p>
                <div className='reviewer-name'>{review.name}</div>
                <div className='profile-image-container'>
                  <img className='img' src={review.profileImage} alt="" />
                </div>
              </div>

            </SwiperSlide>
          )
        })
        }
        {/* <div className="review-card">
          <p>
            The food here is absolutely amazing! The flavors are rich and authentic. Highly recommend the pasta dishes."
          </p>
          <div className='reviewer-name'>Sarah L.</div>
          <div className='profile-image-container'>
            <img className='img' src="profile-pics.png" alt="" />
          </div>
        </div> */}
      </Swiper>
    </section>
  )
}