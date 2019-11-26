import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import styled from "styled-components";

export default function Banner(props) {
  return (
    <ParallaxBanner className="bannerBg" {...props}>
      <ParallaxChildren>{props.children}</ParallaxChildren>
    </ParallaxBanner>
  );
}

const ParallaxChildren = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
