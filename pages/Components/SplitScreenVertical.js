// pages/index.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Pane = styled.div`
  height: ${(props) => props.height};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const SplitVertical = ({ topHeight, middleHight, bottoHeight, children }) => {
  const [top, middle, bottom] = children;
  return (
    <Container>
      {top && <Pane height={topHeight}>{top}</Pane>}
      {middle && <Pane height={middleHight}>{middle}</Pane>}
      {bottom && <Pane height={bottoHeight}>{bottom}</Pane>}
    </Container>
  );
};
