import React, { useEffect, useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { content_width } from "../consts";

const BestProducts = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    setSliderData(props?.products.slice(startIndex, startIndex + 5));
  }, [startIndex, props.products]);

  const filterProducts = (category) => {
    const filteredData = props.products.filter(
      (product) => product.category === category
    );

    setSliderData(filteredData.slice(0, 5));
    setStartIndex(0);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 5));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(props?.products.length - 5, prevIndex + 5)
    );
  };

  return (
    <MainContainer>
      {/* <marquee behavior="right" direction="right">
        <img
          src="https://www.dailyfreepsd.com/wp-content/uploads/2014/03/Moving-Car-Animation-Photoshop-PSD.gif"
          alt=""
          style={{
            border: "4px solid transparent",
            borderRadius: "100%",
            height: "300px",
          }}
        />
      </marquee> */}
      <ParentBox>
        <h3>{props.title}</h3>
        <StyledUl>
          {props?.listItems?.map((category) => (
            <li key={category}>
              <Button onClick={() => filterProducts(category.toLowerCase())}>
                {category}
              </Button>
            </li>
          ))}

          <li>
            <Link to="/allproducts">
              <StyledButton>See All</StyledButton>
            </Link>
          </li>
        </StyledUl>
      </ParentBox>

      <SubContainer>
        <StyledButton onClick={handlePrev} disabled={startIndex === 0}>
          {"<"}
        </StyledButton>
        <Container>
          {sliderData.map((item) => (
            <CenteredContainer key={item.id}>
              <img src={item.src} alt={item.title} />
              <p>{item.brand}</p>
              <h3>{item.title}</h3>
              <p>{item.rating}</p>
              <p>{item.price}</p>
            </CenteredContainer>
          ))}
        </Container>
        <StyledButton
          onClick={handleNext}
          disabled={startIndex + 5 >= props?.products.length}
        >
          {">"}
        </StyledButton>
      </SubContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;

const ParentBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  list-style: none;
  height: 100%;
  @media (max-width: 767px) {
    display: none;
  }

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

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  border-radius: 66px;
  width: 31px;
  padding: 1px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  width: 223px;
  opacity: 0.8;
`;

export default BestProducts;
