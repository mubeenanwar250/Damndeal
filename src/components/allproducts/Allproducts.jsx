import React from "react";
import styled from "styled-components";

import { Breadcrumb } from "antd";
import { content_width } from "../../consts";
import ShopProductCards from "./ShopProductCards";
import {cardData} from "../../Data/Data"
const breadCrumbFilterData = [
  { title: "Home" },
  { title: "Electonics" },
  { title: "Computers" },
  { title: "Laptops" },
];

const Allproducts = () => {
  return (
    <MainContainer>
      <Container>
        <Breadcrumb items={breadCrumbFilterData} />;
        <div style={{ textAlign: "left" }}>
          <StyledHeadind>Laptops and Accessories</StyledHeadind>
          <StyledPara>
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and storage, accessories and more
          </StyledPara>
          <StyledHr />
        </div>
        <ShopProductCards data={cardData} />
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;

`;

const Container = styled.div`
  margin: 50px 0px;
`;
const StyledHr = styled.hr`
  height: 1px;
  margin-top: 10px;
  border: none;
  background-color: #eaeaea;
`;
const StyledHeadind = styled.h2`
  padding-top: 1rem;
  font-family: sans-serif;
  color: #041e42;
  font-weight: 500;
`;
const StyledPara = styled.p`
  padding-top: 10px;
  font-family: sans-serif;
  color: #041e42;
  font-weight: 40;
`;

export default Allproducts;
