import React, { useState } from "react";
import "./Works.modules.css";

import FirModal from "../components/modals/FirModal";
import SecModal from "../components/modals/SecModal";

// 모달 부분쪽을 잘 모르시는 거 같아서 모달만 주석 넣어드립니다
// 다른 부분 모르시는 거 있으시면 언제든 연락주세요
// root에서 src > components > modals안에 모달 파일 생성하시고 css도 똑같이 배껴가시면 됩니다
// 후에 useState를 이용해 "const [isFirModal, setIsFirModal] = useState(false);" 이렇게 State의 기본 값을 false로 생성합니다
// 그리고 삼항 연산자를 사용해 최상단에 모달이 위치 하도록 넣어줍니다. ※17라인 참고하시면 됩니다
// 후에 이미지를 클릭 했을때 해당 State를 true로 바꿔주시면 됩니다 ※21라인 참고 하시면 됩니다
// State를 Props로 전달해줘서 FirModal에서 X버튼을 클릭 했을때 State가 false로 바뀌게 하면 됩니다

function Works() {
  const [isFirModal, setIsFirModal] = useState(false);
  const [isSecModal, setIsSecModal] = useState(false);

  return (
    <div>
      {isFirModal ? <FirModal setIsFirModal={setIsFirModal} /> : null}
      {isSecModal ? <SecModal setIsSecModal={setIsSecModal} /> : null}
      <div className="works-container">
        <div>
          <img
            onClick={() => {
              setIsFirModal(true);
            }}
            src="/works/1.png"
            alt="1"
          />
          <img src="/works/2.png" alt="2" />
          <img src="/works/3.png" alt="3" />
          <img src="/works/4.png" alt="4" />
          <img src="/works/5.png" alt="5" />
          <img src="/works/6.png" alt="6" />
        </div>
        <div>
          <img
            onClick={() => {
              setIsSecModal(true);
            }}
            src="/works/7.png"
            alt="7"
          />
          <img src="/works/8.png" alt="8" />
          <img src="/works/9.png" alt="9" />
          <img src="/works/10.png" alt="10" />
          <img src="/works/11.png" alt="11" />
          <img src="/works/12.png" alt="12" />
        </div>
      </div>
      <div className="works13-img">
        <img src="/works/13.png" alt="13" />
      </div>
      <div className="last-img-container mt">
        <div className="flex flex-col">
          <img src="/works/14.png" alt="14" />
          <img src="/works/15.png" alt="15" />
        </div>
        <div className="flex flex-col">
          <img src="/works/16.png" alt="16" />
          <img src="/works/17.png" alt="17" />
        </div>
      </div>
    </div>
  );
}

export default Works;
