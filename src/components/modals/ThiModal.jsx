import React from "react";

function ThiModal({ setIsThiModal }) {
  return (
    <div className="modal">
      <div className="modal-box2">
        <div className="about-header">
          <h2 className="dogica">open campus 2023 - dept.science of design</h2>
          <div>
            <img
              onClick={() => {
                setIsThiModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <div className="about2-content dogica">
          <p className="center sixt">
            2023.4-6 <br /> UIUX Design : Gayoung Rhee / Deveolopment : Yushi Ouchida
          </p>
          <div className="pop3">
            <img src="/pop3/Group 2.png" alt="" />
          </div>
          <p className="center blue">website</p>
        </div>
      </div>
    </div>
  );
}

export default ThiModal;
