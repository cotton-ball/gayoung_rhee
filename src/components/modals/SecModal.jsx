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
          <p className="center sixt">2023.4-6 <br /> graphic design : Kota Higrakawa <br /> motion graphic : Gayoung Rhee / 3D : Yushi Ouchida</p>
        </div>
      </div>
    </div>
  );
}

export default SecModal;
