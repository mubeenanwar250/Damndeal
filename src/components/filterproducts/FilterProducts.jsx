import React, { useState } from "react";
import styled from "styled-components";

import { content_width } from "../../consts";
import { Link } from "react-router-dom";
import ShopProductCards from "../allproducts/ShopProductCards";
import { Row, Col, Card as AntdCard, Button, Select, Breadcrumb } from "antd";
import Card from "../allproducts/Card"; // Import Card component
import ListCard from "../allproducts/ListCard"; // Import ListCard component
// import { cardsData } from "../../Data/Data";
import Slider from "../CarousalSIider";
import ShopPageCheckboxFilters from "../filterproducts/ShopPageCheckboxFilters";
import ShopPageSideFilter from "./ShopPageSideFilter";
import ProductDetail from "../productdetails/ProductDetail";

const { Option } = Select;

const breadCrumbFilterData = [
  { title: "Home" },
  { title: "Electonics" },
  { title: "Computers" },
  { title: "Laptops" },
];

const FilterProducts = (props) => {
  const [view, setView] = useState("grid");

  const handleGridView = () => {
    setView("grid");
  };

  const handleListView = () => {
    setView("list");
  };

  return (
    <MainContainer>
      <Breadcrumb items={breadCrumbFilterData} />
      {/* test  */}
      <Slider />
      {/*  */}

      <SubContainer>
        <ParentBox>
          <ShopPageSideFilter />
          <ShopPageCheckboxFilters
            title="CPU Manufacturer"
            options={["AMD", "Apple", "Intel", "NVIDIA", "Qualcomm"]}
            numbers={["87", "92", "123", "49", "12"]}
          />
          <ShopPageCheckboxFilters
            title="Memory Capacity"
            options={["16 GB", "32GB", "64GB", "128GB", "1TB"]}
            numbers={["87", "92", "123", "49", "12"]}
          />
          <ShopPageCheckboxFilters
            title="Screen Size"
            options={[
              "17 Inches & Above ",
              "16 to 16.9 Inches",
              "15 to 15.9 Inches",
              "14 to 14.9 Inches",
              "13 to 13.9 Inches",
            ]}
            numbers={["87", "92", "123", "49", "12"]}
          />
          <ShopPageCheckboxFilters
            title="Display Resolution"
            options={[
              "1024 x 600 pixel",
              "1024 x 768 pixel",
              "1280 x 720 pixel",
              "1280 x 800 pixel",
              "1366 x 768 pixel",
            ]}
            numbers={["87", "92", "123", "49", "12"]}
          />
          <ShopPageCheckboxFilters
            title="Customer Rating"
            options={["AMD", "Apple", "Intel", "NVIDIA"]}
            numbers={["87", "92", "123", "49"]}
            style={{ display: "none" }}
          />
          <ShopPageCheckboxFilters
            title="Condition"
            options={["New", "Used", "Renew"]}
            numbers={["87", "92", "123"]}
            style={{ display: "none" }}
          />
        </ParentBox>
        <Container>
          <div style={{ textAlign: "left" }}>
            <StyledHeadind>Laptops and Accessories</StyledHeadind>
            <StyledPara>
              Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
              and storage, accessories and more
            </StyledPara>
            <StyledHr />
          </div>
          <GridContainer>
            <FilterContainer>
              <Row>
                <StyledBox xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Select defaultValue="Price">
                    <Option value="Price">Price</Option>
                    <Option value="Low to High">Low to High</Option>
                    <Option value="High to Low">High to Low</Option>
                  </Select>
                  <Select defaultValue="Brand">
                    <Option value="Brand">Brand</Option>
                    <Option value="Low to High">Low to High</Option>
                    <Option value="High to Low">High to Low</Option>
                  </Select>
                  <Select defaultValue="Color">
                    <Option value="Color">Color</Option>
                    <Option value="Low to High">Low to High</Option>
                    <Option value="High to Low">High to Low</Option>
                  </Select>
                </StyledBox>
                <StyledCol xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Select defaultValue="Default Sorting">
                    <Option value="Default Sorting">Default Sorting</Option>
                    <Option value="Low to High">Low to High</Option>
                    <Option value="High to Low">High to Low</Option>
                  </Select>

                  <StyledUl>
                    <li>
                      <StyledButton onClick={handleGridView}>Grid</StyledButton>
                    </li>
                    <li>
                      <StyledButton onClick={handleListView}>List</StyledButton>
                    </li>
                  </StyledUl>
                </StyledCol>
              </Row>
            </FilterContainer>
            <Row gutter={[16, 16]}>
            {props?.data?.map((card) => (
              <Col
                key={card?.id}
                xs={{ flex: "100%" }}
                sm={{ flex: view === "grid" ? "50%" : "100%" }}
                md={{ flex: view === "grid" ? "30%" : "100%" }}
                lg={{ flex: view === "grid" ? "20%" : "100%" }}
              >
                {/* Wrap the card with Link and pass the product ID as a URL parameter */}
                <Link to={`/productdetails/${card?.id}`}>
                {/* <Link to={`/productdetails`}> */}

                  {view === "grid" ? <Card {...card} /> : <ListCard {...card} />}
                </Link>
              </Col>
            ))}
          </Row>
          </GridContainer>
        </Container>
      </SubContainer>
      <ProductDetail/>

    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;
const ParentBox = styled.div`
  width: 179px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
`;

const Container = styled.div`
  /* margin: 50px 0px; */
  width: 1101px;
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
// const HiddenOnMd = styled.div`
//   display: flex;
//   gap: 1rem;

//   /* @media (max-width: 768px) {
//     display: none;
//   } */
// `;
// const HiddenOnSm = styled.div`
//   display: flex;
//   gap: 1rem;
//   @media (max-width: 576px) {
//     display: none;
//   }
// `;

const GridContainer = styled.div`
  padding: 24px 0px;
  margin-top: 10px;
  text-align: left;
`;

const FilterContainer = styled.div`
  padding-top: 1rem;
  margin-bottom: 40px;
`;

const StyledBox = styled(Col)`
  display: flex;
  gap: 30px;
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const StyledUl = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  list-style: none;
  height: 100%;

  li {
    position: relative;
    cursor: pointer;
    transition: color 0.3s;
  }

  li::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
  }
  li:hover {
    color: #041e42;
  }

  li:hover::after {
    background-color: #041e42;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 66px;
  width: 70px;
  padding: 1px;
`;

export default FilterProducts;
