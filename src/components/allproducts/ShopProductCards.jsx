import React, { useState } from "react";
import { Link } from "react-router-dom";
import surface from "../../assets/svgs/Surface 1 (1).svg";
import { Row, Col, Card as AntdCard, Button, Select } from "antd";
import styled from "styled-components";
import Card from "./Card"; // Import Card component
import ListCard from "./ListCard"; // Import ListCard component
// import { Row, Col, Button, Card } from "antd";
import { cardsData } from "../../Data/Data";
const { Option } = Select;

const ShopProductCards = (props) => {
  const [view, setView] = useState("grid");

  const handleGridView = () => {
    setView("grid");
  };

  const handleListView = () => {
    setView("list");
  };

  return (
    <GridContainer>
      <Container>
        {/* test */}

        <FilterContainer>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <HiddenOnMd>
                <Link to="/filterproducts">
                  <Select defaultValue="All Filter">
                    <Option value="All Filter">All Filter</Option>
                    <Option value="Low to High">Low to High</Option>
                    <Option value="High to Low">High to Low</Option>
                  </Select>
                </Link>

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
              </HiddenOnMd>
            </Col>
            <StyledCol xs={24} sm={24} md={12} lg={12} xl={12}>
              <VisibleOnMd>
                <Select defaultValue="Filter Options" style={{ width: "100%" }}>
                  <Option value="Filter Options" disabled>
                    Filter Options
                  </Option>

                  <Option value="All Filter">All Filter</Option>
                  <Option value="Low to High">Low to High</Option>
                  <Option value="High to Low">High to Low</Option>
                  <Option value="Brand">Brand</Option>
                  <Option value="Color">Color</Option>
                </Select>
              </VisibleOnMd>
              <HiddenOnSm>
                <Select defaultValue="Default Sorting">
                  <Option value="Default Sorting">Default Sorting</Option>
                  <Option value="Low to High">Low to High</Option>
                  <Option value="High to Low">High to Low</Option>
                </Select>
              </HiddenOnSm>

              <StyledUl>
                <li>
                  <StyledButton onClick={handleGridView}>Grid</StyledButton>
                </li>
                <li>
                  <StyledButton onClick={handleListView}>List</StyledButton>
                </li>
              </StyledUl>
              {/* <div>
            <StyledButton>Grid</StyledButton>
            <StyledButton>List</StyledButton>
          </div> */}
            </StyledCol>
          </Row>
        </FilterContainer>
        {/* test */}
        {/* <ShopFilterRow
          handleGridView={handleGridView}
          handleListView={handleListView}
        /> */}
      </Container>
      <Row gutter={[16, 16]}>
        {props.data.map((card) => (
          <Col
            style={{
              display: "flex",
              margin: "0 auto",
            }}
            key={card.id}
            xs={{
              flex: "100%",
            }}
            sm={{
              flex: view === "grid" ? "50%" : "100%",
            }}
            md={{
              flex: view === "grid" ? "30%" : "100%",
            }}
            lg={{
              flex: view === "grid" ? "20%" : "100%",
            }}
          >
            {view === "grid" ? <Card {...card} /> : <ListCard {...card} />}
          </Col>
        ))}
      </Row>
    </GridContainer>
  );
};

export default ShopProductCards;

const GridContainer = styled.div`
  padding: 24px 0px;
  margin-top: 10px;
  text-align: left;
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const FilterContainer = styled.div`
  padding-top: 1rem;
`;
const HiddenOnMd = styled.div`
  display: flex;
  gap: 1rem;
  .ant-select-selector {
    border-radius: 20px;
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;
const VisibleOnMd = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    justify-content: start;
    width: 100%;
  }
`;
const StyledCol = styled(Col)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
`;
const HiddenOnSm = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 576px) {
    display: none;
  }
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
  /* @media (max-width: 767px) {
    display: none;
  } */

  li {
    position: relative;
    cursor: pointer;
    transition: color 0.3s;
    Button {
      border: none;
    }
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
