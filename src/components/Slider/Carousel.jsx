// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Banner6 (){
  return (
    <div className="container mx-auto">
      <div class="flex items-strech justify-center flex-col md:flex-row ">
              <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-100  w-full h-6/6 py-12 md:mx-10 md:my-5  rounded-lg my-1">
              <div className="flex flex-col justify-center md:w-1/2 pl-3">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 ">Best Deal</h1>
                    <p className="text-base lg:text-xl text-gray-800 mt-2">
                        Save upto <span className="font-bold">50%</span>
                    </p>
                </div>
                  <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                      <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" />
                  </div>
              </div>
          </div>
      </div>
  );
};
function Carousel(){
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>{Banner6()}</SwiperSlide>
      <SwiperSlide>{Banner6()}</SwiperSlide>
      <SwiperSlide>{Banner6()}</SwiperSlide>
      <SwiperSlide>{Banner6()}</SwiperSlide>
    </Swiper>
  );
}
export default Carousel;