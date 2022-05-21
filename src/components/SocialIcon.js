import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Github, Linkdin } from "./AllSvgs";
import styled from "styled-components";
import { lightTheme } from "./Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*: not(: last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 3px;
  height: 10em;
  background-color: ${(props) =>
    props.color === "light" ? lightTheme.text : lightTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons className="icons">
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/huumai18" }}
        >
          <Github
            width={45}
            height={45}
            fill={props.theme === "light" ? lightTheme.text : lightTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://www.linkedin.com/in/huu-mai-283b1216b/",
          }}
        >
          <Linkdin
            width={45}
            height={45}
            fill={props.theme === "light" ? lightTheme.text : lightTheme.body}
          />
        </NavLink>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname: "https://www.facebook.com/profile.php?id=100070492598658",
          }}
        >
          <Facebook
            width={45}
            height={45}
            fill={props.theme === "light" ? lightTheme.text : lightTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
