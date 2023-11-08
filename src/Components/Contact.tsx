import styled from "styled-components";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";
import { useAppDispatch } from "../Redux/hook";
import { setNaviValue } from "../Redux/action";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useMediaQuery } from "react-responsive";
import { ImArrowRight } from "react-icons/im";

interface StyledType {
  $ismobile: boolean;
}

interface WithoMoveSend {
  $ismobile: boolean;
  $movesend: boolean;
}

const ContactContainer = styled.div<StyledType>`
  width: 100vw;
  height: 100vh;
  padding-top: ${(props) => (props.$ismobile ? "80px" : "100px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  scroll-snap-align: start;
  position: relative;
  background-color: #daeaf1;
  text-align: left;

  @font-face {
    font-family: "SUITE-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }
`;

const SendEmailContainer = styled.div<StyledType>`
  width: ${(props) => (props.$ismobile ? "100%" : "70%")};
  height: ${(props) => (props.$ismobile ? "80%" : "85%")};
  padding: ${(props) => (props.$ismobile ? "0 20px" : "0")};

  .formTitle {
    height: 10%;
    margin: 0;
    font-size: ${(props) => (props.$ismobile ? "1.2rem" : "1.5rem")};
    color: white;
    font-family: "Sriracha", cursive;
  }

  .emailForm {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: end;
    font-family: "Sriracha", cursive;

    .inputBox {
      width: 100%;
      height: 80%;
      margin-bottom: 10px;
    }

    h3 {
      margin: 0;
    }

    input,
    textarea {
      padding: 20px;
      border: none;
      background-color: aliceblue;
      border-radius: 10px;
      font-size: ${(props) => (props.$ismobile ? "16px" : "1rem")};
      font-family: "SUITE-Regular";
      &:active,
      &:focus {
        outline: none;
      }
    }

    textarea {
      width: 100%;
      height: ${(props) => (props.$ismobile ? "40%" : "50%")};
      resize: none;
    }

    .nameLabel,
    .emailLabel {
      width: 100%;
      height: 15%;
      margin-bottom: ${(props) => (props.$ismobile ? "50px" : "40px")};
      position: relative;
      display: flex;
      flex-direction: column;

      input {
        width: ${(props) => (props.$ismobile ? "220px" : "230px")};
      }

      .warning {
        position: absolute;
        left: ${(props) => (props.$ismobile ? "225px" : "235px")};
        bottom: ${(props) => (props.$ismobile ? "-35px" : "-30px")};
        color: #da5050;
        font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
        font-family: "SUITE-Regular";
      }
    }

    .messageLabel {
      width: 100%;
      height: ${(props) => (props.$ismobile ? "40%" : "60%")};
      position: relative;
      .warning {
        position: absolute;
        left: 0;
        color: #da5050;
        font-size: ${(props) => (props.$ismobile ? "0.7rem" : "1rem")};
        font-family: "SUITE-Regular";
      }
    }

    .text {
      font-size: 1.2rem;
      color: white;
    }

    .btnBackground {
      width: 200px;
      border-radius: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      position: relative;
      height: ${(props) => (props.$ismobile ? "45px" : "50px")};
      margin-top: ${(props) => (props.$ismobile ? "45px" : "30px")};

      .textContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 130px;
      }
    }
  }
`;

const SlideText = styled.p<WithoMoveSend>`
  width: ${(props) => (props.$movesend ? "0" : "140px")};
  overflow: hidden;
  height: ${(props) => (props.$ismobile ? "20px" : "30px")};
  transition: all 0.8s;
  text-align: ${(props) => (props.$ismobile ? "center" : "right")};
  color: white;
  font-size: ${(props) => (props.$ismobile ? "1rem" : "1.2rem")};
`;

const SubmitBtn = styled.button<WithoMoveSend>`
  width: 70px;
  background-color: aliceblue;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  padding: 10px 0;
  font-size: ${(props) => (props.$ismobile ? "0.8rem" : "1.2rem")};
  border-radius: 10px;
  position: absolute;
  left: ${(props) => (props.$movesend ? "130px" : "0")};
  top: 0;
  transition: all 1s;
  animation: ${(props) => (props.$movesend ? "" : "right infinite linear 1s")};

  @keyframes right {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  &:hover {
  }
`;

function Contact() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const dispatch = useAppDispatch();
  const [ref, inView] = useInView();
  const form = useRef<HTMLFormElement>(null);
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [messageCheck, setMessageCheck] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [moveSend, setMoveSend] = useState(false);

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentForm = form.current as HTMLFormElement | string;

    emailjs
      .sendForm(
        "Portfolio_account",
        "Portfolio_template",
        currentForm,
        "jV3WPUcUBWCycB7V4"
      )
      .then(
        (result) => {
          alert("메일이 전송되었습니다.");
        },
        (error) => {
          alert("메일 전송을 실패했습니다.");
        }
      );
  }

  useEffect(() => {
    if (inView) {
      dispatch(setNaviValue(3));
    }
  }, [inView]);

  function nameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
  }

  function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmailValue(e.target.value);
    if (e.target.value.includes("@") && e.target.value.includes(".")) {
      setEmailCheck(true);
    } else if (!e.target.value.includes("@")) {
      setEmailCheck(false);
    }
  }

  function messageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessageValue(e.target.value);
    if (e.target.value.length >= 10) {
      setMessageCheck(true);
    } else {
      setMessageCheck(false);
    }
  }

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (nameValue.length !== 0 && emailCheck && messageCheck) {
      setMoveSend(true);
      setTimeout(() => setMoveSend(false), 2000);
    } else {
      e.preventDefault();
      alert("모든 내용을 작성해주세요.");
    }
  }

  return (
    <ContactContainer $ismobile={isMobile}>
      <div className="detective" ref={ref} />
      <SendEmailContainer $ismobile={isMobile}>
        <h3 className="formTitle">CONTACT ME BY EMAIL</h3>
        <form className="emailForm" ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className="inputBox">
            <label className="nameLabel">
              <h3 className="text">Name</h3>
              <input
                type="text"
                name="user_name"
                placeholder="이름을 입력해주세요."
                className="nameInput"
                onChange={(e) => nameChange(e)}
                autoComplete="off"
              />
            </label>
            <label className="emailLabel">
              <h3 className="text">Email</h3>
              <input
                type="text"
                name="user_email"
                placeholder="이메일을 입력해주세요."
                className="emailInput"
                onChange={(e) => emailChange(e)}
                autoComplete="off"
              />
              {!emailCheck && emailValue.length !== 0 ? (
                <div className="warning">이메일 형식을 지켜주세요.</div>
              ) : (
                ""
              )}
            </label>
            <label className="messageLabel">
              <h3 className="text">Message</h3>
              <textarea
                name="message"
                placeholder="내용을 입력해주세요."
                className="messageInput"
                onChange={(e) => messageChange(e)}
              />
              {!messageCheck && messageValue.length !== 0 ? (
                <div className="warning">10자 이상 입력해주세요.</div>
              ) : (
                ""
              )}
            </label>
          </div>
          <div className="btnBackground">
            <SubmitBtn
              type="submit"
              value="Send"
              className="submitBtn"
              $movesend={moveSend}
              $ismobile={isMobile}
              onClick={(e) => onSubmit(e)}
            >
              <ImArrowRight color="#daeaf1" />
            </SubmitBtn>
            <div className="textContainer">
              <SlideText
                className="slide"
                $movesend={moveSend}
                $ismobile={isMobile}
              >
                Click to send
              </SlideText>
            </div>
          </div>
        </form>
      </SendEmailContainer>
      <Footer />
    </ContactContainer>
  );
}

export default Contact;
