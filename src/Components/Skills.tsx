import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setNaviValue } from "../Redux/action";

interface StyledType {
  $ismobile: boolean;
  $isclicked: boolean;
}

type WithoutIsclicked = Omit<StyledType, "$isclicked">;

const SkillsContainer = styled.section<WithoutIsclicked>`
  width: 100vw;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "80px" : "100px")};
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  position: relative;

  .backgroundColor {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -20;
    background-color: #eae7fb;
  }
`;

const StackBox = styled.div<StyledType>`
  width: ${(props) => (props.$ismobile ? "160px" : "300px")};
  height: ${(props) => (props.$ismobile ? "160px" : "300px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
  background-color: white;
  flex-direction: column;

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

  .text {
    font-size: ${(props) => (props.$ismobile ? "1.3rem" : "1.8rem")};
    z-index: 10;
    font-family: "Sriracha", cursive;
    animation: move 2s infinite linear;
    margin-top: 10px;
    margin-bottom: ${(props) => (props.$ismobile ? "2.5px" : "10px")};
    cursor: pointer;
  }

  .text::before {
    background-color: #dcd6f7;
    position: absolute;
    z-index: -1;
    left: -3px;
    bottom: 10px;
    width: ${(props) => (props.$ismobile ? "90px" : "145px")};
    height: ${(props) => (props.$ismobile ? "8px" : "15px")};
    content: "";
  }

  .skill {
    width: ${(props) => (props.$ismobile ? "100px" : "160px")};
    height: ${(props) => (props.$ismobile ? "100px" : "160px")};
    position: absolute;
    top: 20%;
    left: 20%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -5;
    transition-property: left, top, z-index;
    transition-duration: 1s, 1s, 0.3s;
    background-repeat: no-repeat;
    background-size: ${(props) => (props.$ismobile ? "60%" : "70%")};
    background-position: center;
    cursor: pointer;

    .background {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      opacity: 0;
      background-color: #eae7fb;
      transition-property: transform, opacity;
      transition-duration: 1s, 3s;
    }

    .contents {
      position: absolute;
      display: flex;
      align-items: center;
      font-size: ${(props) => (props.$ismobile ? "12px" : "16px")};
      justify-content: center;
      text-align: center;
      width: ${(props) => (props.$ismobile ? "100%" : "135%")};
      height: 80%;
      opacity: 0;
      z-index: 20;
      color: black;
      font-weight: bold;
      transition-property: transform, opacity;
      transition-duration: 1.5s, 1s;
      word-break: keep-all;
    }

    .opacity {
      opacity: 0.9;
      transition: all 1.5s;
    }

    .rotate {
      transform: rotateY(180deg);
      opacity: 1;
      transition-property: transform, opacity;
      transition-duration: 1s, 3s;
    }
  }

  .rotate {
    transform: rotateY(180deg);
    opacity: 1;
    transition-property: transform, opacity;
    transition-duration: 1s, 3s;
  }

  .html {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566995514/noticon/jufppyr8htislboas4ve.png");
  }

  .css {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566912109/noticon/puksfce6wca36hes1vom.png");
  }

  .javaScript {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1629279836/noticon/qopgwljhqw2ezqxnfjpe.png");
  }

  .react {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png");
  }

  .redux {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567749614/noticon/zgdaxpaif5ojeduonygb.png");
  }

  .styledComponent {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1568851518/noticon/lwj3hr9v1yoheimtwc1w.png");
  }

  .git {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png");
  }

  .figma {
    background-image: url("https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1608448196/noticon/a0fgk99dgqtyrwwmqsbt.png");
  }

  .htmlMove {
    left: 105%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .cssMove {
    left: -63%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .javaScriptMove {
    top: 115%;
    left: 23%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .gitMove {
    top: -40%;
    left: 82%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .figmaMove {
    top: 83%;
    left: 82%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .reactMove {
    top: -62%;
    left: 22%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .reduxMove {
    top: -42%;
    left: -38%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }

  .styledComponentMove {
    top: 86%;
    left: -42%;
    z-index: 10;
    transition-property: left, top, z-index, transform;
    transition-duration: 1s, 1s, 3s, 2s;
  }
`;

const ClickSkill = styled.div<StyledType>`
  width: ${(props) =>
    props.$isclicked ? (props.$ismobile ? "59%" : "50%") : "0"};
  font-size: ${(props) => (props.$ismobile ? "0.5rem" : "1rem")};
  height: ${(props) => (props.$ismobile ? "7%" : "6%")};
  transition: all 1s ease-in-out;
  display: flex;
  margin-top: ${(props) => (props.$ismobile ? "-5px" : "-8px")};
  justify-content: center;
  overflow: hidden;
`;

function Skills() {
  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inView) {
      dispatch(setNaviValue(1));
    }
  }, [inView]);
  const [isClicked, setIsClicked] = useState(false);
  const [skillClicked, setSkillClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  function clickedOn() {
    setIsClicked(!isClicked);
    const copy = [...skillClicked];
    for (let i = 0; i < 8; i++) {
      copy[i] = false;
    }
    setSkillClicked(copy);
  }

  function skillClickedOn(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const event = e.target as HTMLDivElement;
    const index = Number(event.classList[event.classList.length - 1]);
    const copy = [...skillClicked];
    copy[index] = !skillClicked[index];
    for (let i = 0; i < 8; i++) {
      if (i !== Number(index)) {
        copy[i] = false;
      }
    }
    setSkillClicked(copy);
  }

  return (
    <SkillsContainer $ismobile={isMobile}>
      <div className="backgroundColor"></div>
      <StackBox $ismobile={isMobile} $isclicked={isClicked}>
        <div ref={ref} className="detective" />
        <div onClick={clickedOn} className="text">
          Click Here!
        </div>
        <ClickSkill $isclicked={isClicked} $ismobile={isMobile}>
          이미지를 클릭해보세요.
        </ClickSkill>
        <div
          className={
            isClicked
              ? skillClicked[0]
                ? isMobile
                  ? "htmlMove skill html opacity"
                  : "htmlMove skill html rotate"
                : "htmlMove skill html"
              : "skill html"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[0] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[0]
                ? isMobile
                  ? "contents opacity 0"
                  : "contents rotate 0"
                : "contents 0"
            }
          >
            시맨틱 코드 지향
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[1]
                ? isMobile
                  ? "cssMove skill css opacity"
                  : "cssMove skill css rotate"
                : "cssMove skill css"
              : "skill css"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[1] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[1]
                ? isMobile
                  ? "contents opacity 1"
                  : "contents rotate 1"
                : "contents 1"
            }
          >
            적절한 position 및 display 활용
            <br />
            키프레임을 통한 애니메이션 구현
            <br />
            반응형 웹 구현 경험
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[2]
                ? isMobile
                  ? "javaScriptMove skill javaScript opacity"
                  : "javaScriptMove skill javaScript rotate"
                : "javaScriptMove skill javaScript"
              : "skill javaScript"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[2] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[2]
                ? isMobile
                  ? "contents opacity 2"
                  : "contents rotate 2"
                : "contents 2"
            }
          >
            Axios를 통한 HTTP 비동기 통신
            <br />
            json형태의 데이터 가공 및 활용
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[3]
                ? isMobile
                  ? "reactMove skill react opacity"
                  : "reactMove skill react rotate"
                : "reactMove skill react"
              : "skill react"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[3] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[3]
                ? isMobile
                  ? "contents opacity 3"
                  : "contents rotate 3"
                : "contents 3"
            }
          >
            함수형 컴포넌트 지향
            <br />
            Hook을 통한 라이프사이클 관리
            <br />
            router 등 라이브러리 활용 가능
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[4]
                ? isMobile
                  ? "reduxMove skill redux opacity"
                  : "reduxMove skill redux rotate"
                : "reduxMove skill redux"
              : "skill redux"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[4] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[4]
                ? isMobile
                  ? "contents opacity 4"
                  : "contents rotate 4"
                : "contents 4"
            }
          >
            리액트 전역 상태 관리
            <br />
            Redux-toolkit 사용
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[5]
                ? isMobile
                  ? "styledComponentMove skill styledComponent opacity"
                  : "styledComponentMove skill styledComponent rotate"
                : "styledComponentMove skill styledComponent"
              : "skill styledComponent"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[5] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[5]
                ? isMobile
                  ? "contents opacity 5"
                  : "contents rotate 5"
                : "contents 5"
            }
          >
            css-in-js 구현
            <br />
            Props를 통한 조건부 스타일링
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[6]
                ? isMobile
                  ? "gitMove skill git opacity"
                  : "gitMove skill git rotate"
                : "gitMove skill git"
              : "skill figma"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[6] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[6]
                ? isMobile
                  ? "contents opacity 6"
                  : "contents rotate 6"
                : "contents 6"
            }
          >
            레포지토리 관리
            <br />
            pull push commit 명령어 사용
            <br />
            칸반보드와 이슈를 통한 일정 관리
            <br />
          </div>
        </div>
        <div
          className={
            isClicked
              ? skillClicked[7]
                ? isMobile
                  ? "figmaMove skill figma opacity"
                  : "figmaMove skill figma rotate"
                : "figmaMove skill figma"
              : "skill figma"
          }
          onClick={(e) => skillClickedOn(e)}
        >
          <div
            className={skillClicked[7] ? "background opacity" : "background"}
          ></div>
          <div
            className={
              skillClicked[7]
                ? isMobile
                  ? "contents opacity 7"
                  : "contents rotate 7"
                : "contents 7"
            }
          >
            와이어프레임과 디자인 구현
            <br />
            간단한 상호작용 및 전환 효과 구현
          </div>
        </div>
      </StackBox>
    </SkillsContainer>
  );
}

export default Skills;
