// pages/index.js

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  background: #ffffff;
  margin: 0 auto;
  font-family: Inter, Helvetica, sans-serif;
  color: #252f4a;
`;

const Pane = styled.div`
  display: inline-flex;
  height: 100%;
  width: ${(props) => props.width};
  flex: ${(props) => props.weight};
  /* primary-theme */
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f1f1f5;
`;

export const SplitScreen = ({ leftWidth, rightWidth, children }) => {
  const [left, right] = children;
  return (
    <Container>
      {left && <Pane width={leftWidth}>{left}</Pane>}
      {right && <Pane width={rightWidth}>{right}</Pane>}
    </Container>
  );
};
