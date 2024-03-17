import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <h3>Admin site: http://localhost:3000/admin</h3>
      <h3>Customer site: http://localhost:3000/customer</h3>
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  margin: 0 20px 20px 0;
  cursor: pointer;
  background: #f9f9f9;
`;

export default HomePage;
