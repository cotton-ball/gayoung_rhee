import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./TenModal.modules.css"; 

function TenModal({ setIsTenModal }) {
  return (
    <div className="modal">
      <div className="modal-box1">
        <div className="about-header">
          <h2 className="dogica">metamorphose exhibition</h2>
          <div>
            <img
              onClick={() => {
                setIsTenModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <p className="dogica center">2022.11-12</p>
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
              <img src="/pop10/1.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop10/2.png" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/pop10/3.png" alt="Slide 3" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="video-section">
          <p className="dogica center">Watch the Video:</p>
          <div className="video-container">
            <iframe
              width="600"
              height="100%"
              src="https://www.youtube.com/embed/T01AzUR4xFU?si=wKr_IOHvRsrc_2ss"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TenModal;
