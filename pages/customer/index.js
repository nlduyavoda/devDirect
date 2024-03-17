import { useEffect } from "react";
import { Each } from "../Components/Each";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Button";
import { Tag } from "../Components/TagComponent";

export async function getData() {
  try {
    const response = await fetch("http://localhost:3000/api/items");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getServerSideProps() {
  const fetchData = async () => {
    try {
      const data = await getData();
      return data;
    } catch (error) {
      return [];
    }
  };
  const result = await fetchData();
  return {
    props: {
      items: result,
    },
  };
}

const CustomerPage = ({ items }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Client side rendering");
    } else {
      console.log("Server side rendering");
    }
  }, []);
  return (
    <Container>
      {items.length && (
        <Each
          of={items}
          render={(item, index) => {
            if (item.type === "button") {
              return (
                <PrimaryButton
                  text={item.text}
                  onClick={() => alert(item.alerMess)}
                />
              );
            }
            return <Tag>Paragraph: {item.content}</Tag>;
          }}
        />
      )}
    </Container>
  );
};

export const Container = styled.div`
  width: 100%;
  margin: 0 20px 20px 0;
  cursor: pointer;
  background: #ffffff;
`;

export default CustomerPage;

