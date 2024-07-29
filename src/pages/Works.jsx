import React, { useState } from "react";
import "./Works.modules.css";

import FirModal from "../components/modals/FirModal";
import SecModal from "../components/modals/SecModal";
import ThiModal from "../components/modals/ThiModal";
import FouModal from "../components/modals/FouModal";
import FifModal from "../components/modals/FifModal";
import SixModal from "../components/modals/SixModal";
import SevModal from "../components/modals/SevModal";
import EigModal from "../components/modals/EigModal";
import NinModal from "../components/modals/NinModal";
import TenModal from "../components/modals/TenModal";
import EleModal from "../components/modals/EleModal";
import TweModal from "../components/modals/TweModal";
import TThiModal from "../components/modals/TThiModal";
import TFouModal from "../components/modals/TFouModal";
import TFifModal from "../components/modals/TFifModal";
import TSixModal from "../components/modals/TSixModal";
import TSevModal from "../components/modals/TSevModal";

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
  const [isThiModal, setIsThiModal] = useState(false);
  const [isFouModal, setIsFouModal] = useState(false);
  const [isFifModal, setIsFifModal] = useState(false);
  const [isSixModal, setIsSixModal] = useState(false);
  const [isSevModal, setIsSevModal] = useState(false);
  const [isEigModal, setIsEigModal] = useState(false);
  const [isNinModal, setIsNinModal] = useState(false);
  const [isTenModal, setIsTenModal] = useState(false);
  const [isEleModal, setIsEleModal] = useState(false);
  const [isTweModal, setIsTweModal] = useState(false);
  const [isTThiModal, setIsTThiModal] = useState(false);
  const [isTFouModal, setIsTFouModal] = useState(false);
  const [isTFifModal, setIsTFifModal] = useState(false);
  const [isTSixModal, setIsTSixModal] = useState(false);
  const [isTSevModal, setIsTSevModal] = useState(false);

  return (
    <div>
      {isFirModal ? <FirModal setIsFirModal={setIsFirModal} /> : null}
      {isSecModal ? <SecModal setIsSecModal={setIsSecModal} /> : null}
      {isThiModal ? <ThiModal setIsThiModal={setIsThiModal} /> : null}
      {isFouModal ? <FouModal setIsFouModal={setIsFouModal} /> : null}
      {isFifModal ? <FifModal setIsFifModal={setIsFifModal} /> : null}
      {isSixModal ? <SixModal setIsSixModal={setIsSixModal} /> : null}
      {isSevModal ? <SevModal setIsSevModal={setIsSevModal} /> : null}
      {isEigModal ? <EigModal setIsEigModal={setIsEigModal} /> : null}
      {isNinModal ? <NinModal setIsNinModal={setIsNinModal} /> : null}
      {isTenModal ? <TenModal setIsTenModal={setIsTenModal} /> : null}
      {isEleModal ? <EleModal setIsEleModal={setIsEleModal} /> : null}
      {isTweModal ? <TweModal setIsTweModal={setIsTweModal} /> : null}
      {isTThiModal ? <TThiModal setIsTThiModal={setIsTThiModal} /> : null}
      {isTFouModal ? <TFouModal setIsTFouModal={setIsTFouModal} /> : null}
      {isTFifModal ? <TFifModal setIsTFifModal={setIsTFifModal} /> : null}
      {isTSixModal ? <TSixModal setIsTSixModal={setIsTSixModal} /> : null}
      {isTSevModal ? <TSevModal setIsTSevModal={setIsTSevModal} /> : null}
      <div className="works-container">
        <div>
          <img
            onClick={() => {
              setIsFirModal(true);
            }}
            src="/works/1.png"
            alt="1"
          />
          <img
            onClick={() => {
              setIsThiModal(true);
            }}
            src="/works/2.png"
            alt="2"
          />
          <img
            onClick={() => {
              setIsFifModal(true);
            }}
            src="/works/3.png"
            alt="3"
          />
          <img
            onClick={() => {
              setIsSevModal(true);
            }}
            src="/works/4.png"
            alt="4"
          />
          <img onClick={() => {
            setIsNinModal(true);
          }} src="/works/5.png" alt="5" />
          <img onClick={() => {
            setIsEleModal(true);
          }} src="/works/6.png" alt="6" />
        </div>
        <div>
          <img
            onClick={() => {
              setIsSecModal(true);
            }}
            src="/works/7.png"
            alt="7"
          />
          <img
            onClick={() => {
              setIsFouModal(true);
            }}
            src="/works/8.png"
            alt="8"
          />
          <img
            onClick={() => {
              setIsSixModal(true);
            }}
            src="/works/9.png"
            alt="9"
          />
          <img
            onClick={() => {
              setIsEigModal(true);
            }}
            src="/works/10.png"
            alt="10"
          />
          <img onClick={() => {
            setIsTenModal(true);
          }} src="/works/11.png" alt="11" />
          <img onClick={() => {
            setIsTweModal(true);
          }} src="/works/12.png" alt="12" />
        </div>
      </div>
      <div className="works13-img">
        <img onClick={() => {
          setIsTThiModal(true);
        }} src="/works/13.png" alt="13" />
      </div>
      <div className="last-img-container mt">
        <div className="flex flex-col">
          <img onClick={() => {
            setIsTFouModal(true);
          }} src="/works/14.png" alt="14" />
          <img onClick={() => {
            setIsTSixModal(true);
          }} src="/works/15.png" alt="15" />
        </div>
        <div className="flex flex-col">
          <img onClick={() => {
            setIsTFifModal(true);
          }} src="/works/16.png" alt="16" />
          <img onClick={() => {
            setIsTSevModal(true);
          }} src="/works/17.png" alt="17" />
        </div>
      </div>
    </div>
  );
}

export default Works;
