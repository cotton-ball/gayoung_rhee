import React from "react";

function TFIfModal({ setIsTFifModal }) {
  return (
    <div className="modal">
      <div className="modal-box2">
        <div className="about-header">
          <h2 className="dogica">memory, ripped off</h2>
          <div>
            <img
              onClick={() => {
                setIsTFifModal(false);
              }}
              src="/x.png"
              alt="x"
            />
          </div>
        </div>
        <div className="about2-content dogica">
          <p className="center sixt">
            2021.9
          </p>
          <div className="pop4">
            <img src="/pop15/1.png" alt="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TFIfModal;
