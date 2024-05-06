import React from "react";
import { Flex } from "antd";
import electionic from "../assets/svgs/images.svg";
import clothing from "../assets/svgs/images (1).svg";
import health from "../assets/svgs/images (2).svg";
import kitchen from "../assets/svgs/images (3).svg";
import home from "../assets/svgs/images (4).svg";
import market from "../assets/svgs/images (5).svg";
import toy from "../assets/svgs/images (6).svg";
import babies from "../assets/svgs/images (7).svg";
import styled from "styled-components";
import { content_width } from "../consts";

function FirstProducts() {
  return (
    <MainContainer>
      <Container>
        {[
          {
            src: electionic,
            title: "Electionic",
            id: 1,
          },
          {
            src: clothing,
            title: "Clothing",
            id: 2,
          },
          {
            src: health,
            title: "Health & Beauty",
            id: 3,
          },
          {
            src: kitchen,
            title: "Home & Kitchen",
            id: 4,
          },
          {
            src: home,
            title: "Home & Furniture",
            id: 5,
          },
          {
            src: market,
            title: "Grocery & Market",
            id: 6,
          },
          {
            src: toy,
            title: "Toys and Games",
            id: 7,
          },
          {
            src: babies,
            title: "Babies & Moms",
            id: 8,
          },
        ].map((item) => (
          <CenteredContainer key={item.id}>
            <img src={item.src} alt={item.title} />
            <p>{item.title}</p>
          </CenteredContainer>
        ))}
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1130px) {
    display: ruby;
  }
`;
const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin: 20px; */
  width: 135px;
  img {
    height: 60px;
    width: 60px;
  }
  p {
    text-align: center;
  }
`;
export default FirstProducts;
