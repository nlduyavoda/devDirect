import styled from "styled-components";

export const Button = ({ text, ...props }) => {
  return <ButtonStyle {...props}>{text}</ButtonStyle>;
};

export const ButtonStyle = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: none;
  border-radius: 5px;
  min-width: 20px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;

export const PrimaryButton = ({ ...props }) => {
  return (
    <Button
      background="#f9f9f9"
      color="#575962"
      style={{ margin: "0 20px 20px 0" }}
      {...props}
    ></Button>
  );
};
