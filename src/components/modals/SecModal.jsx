import React from "react";
import "./SecModal.modules.css";

function SecModal(props) {
  return (
    <div className="modal">
      <div className="modal-box2">
        <div className="about-header">
          <h2 className="dogica">open campus 2023 - dept.science of design</h2>
          <div>
            <img
              onClick={() => {
                props.setIsSecModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <div className="about2-content dogica">
          <p className="center sixt">
            2023.4-6 <br />
            graphic design : Kota Higrakawa <br />
            motion graphic : Gayoung Rhee / 3D : Yushi Ouchida
          </p>
          {/* 비디오 링크 추가 부분 */}
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"  // 여기에 실제 비디오 ID를 삽입하세요.
              title="Video description"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="315"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecModal;
