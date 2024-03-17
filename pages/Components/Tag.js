import styled from "styled-components";

const TagComponent = ({ content = "paragraph", theme }) => {
  const tagSymbol = content?.split("")[0].toUpperCase();
  const { color, background } = COLORS[theme];
  return (
    <Container>
      <SymbolStyled color={color} background={background}>
        {tagSymbol}
      </SymbolStyled>
      <div>{content}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 20px 20px 0;
`;

const SymbolStyled = styled.div`
  display: flex;
  border-radius: 5px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  padding: 10px;
  aspect-ratio: 1 / 1;
  min-height: 20px;
  min-width: 20px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const ActionDanger = ({ ...props }) => {
  return <TagComponent theme="danger" {...props} />;
};

export const ActionPrimary = ({ ...props }) => {
  return <TagComponent theme="primary" {...props} />;
};

const COLORS = {
  danger: {
    color: "#ffffff",
    background: "#F8285A",
  },
  primary: {
    color: "#ffffff",
    background: "#1B84FF",
  },
};
