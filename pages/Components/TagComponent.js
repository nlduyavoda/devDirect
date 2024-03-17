import styled from "styled-components";

export const Tag = ({ children, ...props }) => {
  return <TagStyled {...props}>{children}</TagStyled>;
};

export const TagStyled = styled.div`
  height: 20px;
  width: fit-content;
  border: 1px solid;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
