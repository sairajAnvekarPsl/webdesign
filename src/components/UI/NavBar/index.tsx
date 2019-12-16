import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { isMobile } from "react-device-detect";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = props => {
  const [color, setColor] = useState("header-color");
  const [resize, setResize] = useState("no-resize");

  function handleStatusChange(e) {
    if (!isMobile) {
      if (window.scrollY > (window.screen.height/2 - 150)) {
        setColor("solid");
      } else {
        setColor("header-color");
      }
      if (window.scrollY > window.screen.height/2 -150) {
        setResize("resize");
      } else {
        setResize("no-resize");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStatusChange);
    // setColor("transparent");
  }, []);

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 60px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 500,
    config: config.wobbly
  });

  const brandAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 200,
    config: config.wobbly
  });
  return (
    <>
      <NavBar className={color} style={barAnimation}>
        <FlexContainer className={resize}>
          <animated.div style={brandAnimation}>
            <Brand />
          </animated.div>

          <NavLinks style={linkAnimation}>{props.children}</NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      >
        {props.children}
      </CollapseMenu>
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1rem;
  justify-content: space-between;
  height: 5rem;
 
  }
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  font-size: 14px;

  & a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
