import React, { useState } from "react";
import styled from "styled-components";
import LogoComponent from "../components/logo";
import SocialIcon from "../components/SocialIcon";
import { ClickMe } from "../components/AllSvgs";
import { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { ContactModal } from "../components/modal";

const DarkDiv = styled.div`
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
`;

const rotate = keyframes`
80%   { opacity: 0.7; }
100%  { opacity: 1; }
}`;

const Center = styled.button`
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};

  & > :last-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    padding-top: 1rem;
  }
`;

export const Main = () => {
  const [click, setClick] = useState(false);
  const [open, handleOpen] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="MainContainer">
      <DarkDiv className="DarkDiv" click={click} />
      <div className="container home">
        <Center className="Center" click={click}>
          <ClickMe
            onClick={() => handleClick()}
            width={click ? 100 : 250}
            height={250}
          ></ClickMe>
        </Center>
        {click ? (
          <div className="Box">
            <LogoComponent theme={click ? "light" : "light"} />
            <SocialIcon theme={click ? "light" : "light"} />
            <div className="SubBox">
              <div className="text">
                <div className="text-title">
                  <Typewriter
                    loop={1}
                    cursor
                    typeSpeed={80}
                    cursorStyle="_"
                    words={["I am Huu Mai"]}
                  ></Typewriter>
                </div>
                <div className="text-subtitle">
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    words={[
                      "Full-stack Developer",
                      "Java Programmer",
                      "Database Oracle Admin",
                      "Willing To New Learning",
                    ]}
                  />
                </div>
                <div className="line"></div>
                <div className="btn-box">
                  <button
                    onClick={() => handleOpen(true)}
                    className="btn-submit"
                    type="submit"
                  >
                    Contact Me
                  </button>
                  {open && <ContactModal OpenModal={handleOpen} />}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
