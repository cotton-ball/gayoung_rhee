import React from "react";

function FouModal({ setIsFouModal }) {
  return (
    <div className="modal">
    <div className="modal-box2">
      <div className="about-header">
        <h2 className="dogica">study of color interactions</h2>
        <div>
          <img
            onClick={() => {
              setIsFouModal(false);
            }}
            src="/x.png"
            alt="x"
          />
        </div>
      </div>
      <div className="about2-content dogica">
        <p className="center sixt">
          2023.11-12
        </p>
        <div className="pop4">
          <img src="/pop4/1.png" alt="8" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default FouModal;