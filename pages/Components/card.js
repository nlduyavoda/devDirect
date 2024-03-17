import styled from "styled-components";

export const Card = ({ ...props }) => {
  return (
    <Container {...props}>
      <ul>
        {props.label && <h3>{props.label}</h3>}
        {props.text && <li>text: {props.text}</li>}
        {props.content && <li>content: {props.content}</li>}
        {props.label && <li>alert messages: {props.label}</li>}
      </ul>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  margin: 0 20px 20px 0;
  cursor: pointer;
  background: #f9f9f9;
`;
