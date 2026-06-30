"use client";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
const SwiperNavigationButtons = () => {
  const swiper = useSwiper(); // Giờ hook này đã nằm bên trong ngữ cảnh <Swiper> nên hoạt động tốt

  return (
    <div className="reveal mt-12 flex justify-center gap-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-full border border-gray-200 p-4 transition-colors hover:bg-gray-100"
      >
        ←
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-full border border-gray-200 p-4 transition-colors hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
};
const Videos = () => {
  return (
    <>
      {" "}
      <section className="px-6 py-24">
        <h2 className="section-title reveal mb-16 text-center text-4xl">Videos</h2>
        <div className="reveal-stagger mx-auto max-w-7xl overflow-hidden px-4">
          <Swiper
            spaceBetween={30}
            slidesPerView={1.5}
            centeredSlides={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-12"
          >
            <SwiperSlide className="scale-90  opacity-40 transition-all duration-500 ease-in-out [&.swiper-slide-active]:z-10 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:opacity-100">
              <div className="video-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="Showroom"
                  className="h-[400px]  w-full object-cover"
                  src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/02.png"
                />
                <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="scale-90  opacity-40 transition-all duration-500 ease-in-out [&.swiper-slide-active]:z-10 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:opacity-100">
              <div className="video-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="Our Factory"
                  className="h-[400px]  w-full object-cover"
                  src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/about/03.jpg"
                />
                <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold tracking-[0.3em] uppercase">Our Factory</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="scale-90  opacity-40 transition-all duration-500 ease-in-out [&.swiper-slide-active]:z-10 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:opacity-100">
              <div className="video-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="Craftsmanship"
                  className="h-[400px]  w-full object-cover"
                  src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/02.png"
                />
                <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="scale-90  opacity-40 transition-all duration-500 ease-in-out [&.swiper-slide-active]:z-10 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:opacity-100">
              <div className="video-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="Craftsmanship"
                  className="h-[400px]  w-full object-cover"
                  src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/about/03.jpg"
                />
                <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="scale-90  opacity-40 transition-all duration-500 ease-in-out [&.swiper-slide-active]:z-10 [&.swiper-slide-active]:scale-110 [&.swiper-slide-active]:opacity-100">
              <div className="video-card group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
                <img
                  alt="Craftsmanship"
                  className="h-[400px]  w-full object-cover"
                  src="https://daithanhfurniture.com/wp-content/themes/daithanh/assets/img/02.png"
                />
                <div className="video-overlay absolute inset-0 flex flex-col items-center justify-center bg-black/20 text-white">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/50 transition-transform group-hover:scale-110">
                    <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperNavigationButtons />
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Videos;
