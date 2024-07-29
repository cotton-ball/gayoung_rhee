import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function TFouModal({ setIsTFouModal }) {
  return (
    <div className="modal">
      <div className="modal-box1">
        <div className="about-header">
          <h2 className="dogica">color study</h2>
          <div>
            <img
              onClick={() => {
                setIsTFouModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <p className="dogica center">2022.8</p>
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
              <img src="/pop14/1.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/2.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/3.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/4.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/5.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/6.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/7.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/8.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/9.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/10.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/11.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/12.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/13.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/14.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/15.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/16.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/17.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/18.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/19.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/20.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/21.png" alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop14/22.png" alt="1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TFouModal;
