import React, { useState } from "react";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";

const Line = styled.span`
  width: 3px;
  height: 10em;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.body : DarkTheme.body};
`;
export const Nav = (props) => {
  const [click] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);

  return (
    <>
      <div className="link-box">
        <Hamburger
          className="hamburger-react"
          size={25}
          color="black"
          toggled={close}
          toggle={setClose}
          aria-expanded={close}
          onToggle={(toggled) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
        />
        <Line className="l-ne" color={props.theme} />
        <div className={`link ${open ? "" : "closed"}`}>
          <NavLink
            className="link-click"
            to="/"
            click={click}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Home
            </motion.p>
          </NavLink>
          <NavLink
            className="link-click"
            to="/about"
            click={click}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.p>
          </NavLink>
          <NavLink
            className="link-click"
            to="/skills"
            click={click}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Skills
            </motion.p>
          </NavLink>

          <NavLink
            className="link-click"
            to="/work"
            click={click}
            onClick={() => {
              setClose(false);
              setOpen(false);
            }}
          >
            <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Work
            </motion.p>
          </NavLink>
        </div>
      </div>
    </>
  );
};
