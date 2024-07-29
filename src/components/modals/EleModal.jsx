import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function EleModal({ setIsEleModal }) {
  return (
    <div className="modal">
      <div className="modal-box1">
        <div className="about-header">
          <h2 className="dogica">Maybe that's the highlight</h2>
          <div>
            <img
              onClick={() => {
                setIsEleModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <p className="dogica center">2022.9-10</p>
        <div className="modal-content1">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/pop11/1.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop11/2.png" alt="2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default EleModal;
