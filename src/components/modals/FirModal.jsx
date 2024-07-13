import React from "react";
import "./FirModal.modules.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function FirModal(props) {
  return (
    <div className="modal">
      <div className="modal-box1">
        <div className="about-header">
          <h2 className="dogica">pieces</h2>
          <div>
            <img
              onClick={() => {
                props.setIsFirModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <p className="dogica center">2023.9-10</p>
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
            <SwiperSlide><img src="/modal/1.png" alt="1" /></SwiperSlide>
            <SwiperSlide><img src="/modal/2.png" alt="2" /></SwiperSlide>
            <SwiperSlide><img src="/modal/3.png" alt="3" /></SwiperSlide>
            <SwiperSlide><img src="/modal/4.png" alt="4" /></SwiperSlide>
            <SwiperSlide><img src="/modal/5.png" alt="5" /></SwiperSlide>
            <SwiperSlide><img src="/modal/6.png" alt="6" /></SwiperSlide>
            <SwiperSlide><img src="/modal/7.png" alt="7" /></SwiperSlide>
            <SwiperSlide><img src="/modal/8.png" alt="8" /></SwiperSlide>
            <SwiperSlide><img src="/modal/9.png" alt="9" /></SwiperSlide>
            <SwiperSlide><img src="/modal/10.png" alt="10" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default FirModal;
