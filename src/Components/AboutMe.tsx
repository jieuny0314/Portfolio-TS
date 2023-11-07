import styled from "styled-components";
import Logo from "../Images/Logo_big.png";
import Curve from "../Images/curve.png";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

interface StyledType {
  $ismobile: boolean;
  $isbigpc: boolean;
  $isclicked: boolean;
}

const AboutMeContainer = styled.section<StyledType>`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  background-color: #faf3f0;

  @keyframes move {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  .clickMe {
    position: absolute;
    width: ${(props) => (props.$ismobile ? "160px" : "300px")};
    top: ${(props) => (props.$ismobile ? "-60%" : "-80%")};
    left: 50%;
    display: flex;
    animation: move 2s infinite linear;

    .curveImg {
      margin-top: ${(props) => (props.$ismobile ? "20px" : "40px")};
      transform: scale(0.5);
    }

    .hoverText {
      font-family: "Nanum Pen Script", cursive;
      font-size: ${(props) => (props.$ismobile ? "1.3rem" : "2rem")};
    }
  }

  .logoImgContainer {
    width: ${(props) => (props.$ismobile ? "150px" : "30%")};
    position: relative;
    cursor: ${(props) => (props.$isclicked ? "" : "pointer")};
    height: 125px;
  }

  .logoImg {
    width: ${(props) => (props.$ismobile ? "150px" : "80%")};
    cursor: pointer;
    position: absolute;
    top: ${(props) =>
      props.$isclicked ? (props) => (props.$ismobile ? "-140%" : "0") : "0"};
    left: ${(props) =>
      props.$isclicked ? (props) => (props.$ismobile ? "0" : "-60%") : "0"};
    transition: all 1s;
  }

  .detailContainer {
    word-break: keep-all;
    width: ${(props) => (props.$ismobile ? "320px" : "160%")};
    position: absolute;
    height: ${(props) =>
      props.$isclicked
        ? "400px"
        : (props) => (props.$ismobile ? "60px" : "120%")};
    overflow: hidden;
    top: ${(props) =>
      props.$isclicked
        ? (props) => (props.$ismobile ? "-80px" : "-130px")
        : "0"};
    left: ${(props) =>
      props.$isclicked
        ? (props) =>
            props.$ismobile
              ? "-50%"
              : (props) => (props.$isbigpc ? "65%" : "40%")
        : props.$ismobile
        ? "-50%"
        : "0"};
    padding: 20px;
    opacity: ${(props) => (props.$isclicked ? "1" : "0")};
    transition: all 1s;

    @keyframes change {
      0% {
        font-size: scale(1);
      }
      25% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1);
      }
      75% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    .title {
      position: relative;

      .text {
        margin: 0;
        font-size: ${(props) => (props.$ismobile ? "1.5rem" : "2rem")};
        position: relative;
        z-index: 10;
      }

      .borderBox {
        position: absolute;
        bottom: 5px;
        z-index: 5;
        background-color: #d5b4b4;
        opacity: 0.6;
        height: ${(props) => (props.$ismobile ? "13px" : "20px")};
        width: ${(props) => (props.$ismobile ? "220px" : "295px")};
      }
    }

    .contents {
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.3rem")};
    }

    .question {
      margin: 0;
    }

    .blogLink {
      color: black;
      text-decoration-line: none;

      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
      }

      .text {
        font-family: "Sriracha", cursive;
        font-size: ${(props) => (props.$ismobile ? "1.2rem" : "1.5rem")};
        animation: change 1.5s infinite linear;
        display: inline-block;
      }
    }
  }

  .fold {
    position: absolute;
    bottom: 17%;
    right: 10%;
    background-color: #d9d9d9;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;

function AboutMe() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const isBigPC = useMediaQuery({
    query: "(min-width:1700px)",
  });

  const [isClicked, setIsClicked] = useState(false);

  const [ref, inView] = useInView();

  const handleMouseClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <AboutMeContainer
      $ismobile={isMobile}
      $isbigpc={isBigPC}
      $isclicked={isClicked}
    >
      <div onClick={handleMouseClicked} className="logoImgContainer">
        <article className="clickMe">
          {!isClicked ? (
            <>
              <img className="curveImg" src={Curve} alt="CurveImage" />
              <p className="hoverText">로고를 클릭해보세요.</p>
            </>
          ) : (
            ""
          )}
        </article>
        <div className="detective" ref={ref} />
        <img className="logoImg" src={Logo} alt="LogoImage" />
        <article className="detailContainer">
          <div className="title">
            <h2 className="text">기록하는 개발자 김지은</h2>
            <div className="borderBox"></div>
          </div>
          <p className="contents">
            알아가는 걸 기록하고,<br></br>프로젝트로 구현하고,<br></br>
            이후 회고를 통해 내 것으로 만드는,
          </p>
          <p className="contents">
            같은 걸 두 번 물어보는 게 아닌 기록한 걸 읽고 적용할 수 있는
            개발자입니다.<br></br> 개인 학습 및 회고 블로그를 운영하고 있으며 약
            340개의 포스팅을 남겼습니다.<br></br>
          </p>
          <p className="contents question">제 기록이 궁금하신가요?</p>
          <a
            className="blogLink"
            target="_blank"
            rel="noreferrer"
            href="https://jieunny.tistory.com/"
          >
            <h2 className="text">Blog</h2>
          </a>
        </article>
      </div>
    </AboutMeContainer>
  );
}

export default AboutMe;
