import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function EigModal({ setIsEigModal }) {
  return (
    <div className="modal">
      <div className="modal-box1">
        <div className="about-header">
          <h2 className="dogica">At the end of the dangerous riverbank, we stand togetherh</h2>
          <div>
            <img
              onClick={() => {
                setIsEigModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <p className="dogica center">2023.5-7</p>
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
              <img src="/pop8/1.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop8/2.png" alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop8/3.png" alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop8/4.png" alt="4" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default EigModal;
