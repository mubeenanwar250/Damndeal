import React, { useEffect, useState } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { content_width } from "../consts";

const CategorieProducts = (props) => {
  const [startIndex, setStartIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    setSliderData(props?.allproducts.slice(startIndex, startIndex + 5));
  }, [startIndex, props.allproducts]);

  const filterProducts = (category) => {
    const filteredData = props.allproducts.filter(
      (product) => product.category === category
    );

    setSliderData(filteredData.slice(0, 5));
    setStartIndex(0);
  };

  return (
    <MainContainer>
      <ParentBox>
        <h3>{props.title}</h3>
        <StyledUl>
          {props?.listItems?.map((item) => (
            <li key={item.key}>
              <li>
                <Button onClick={() => filterProducts("baby")}>
                  {item.name}
                </Button>
              </li>
            </li>
          ))}

          <li>
            <Button onClick={() => filterProducts()}>ALL</Button>
          </li>
        </StyledUl>
      </ParentBox>

      <StyledContainer>
        {sliderData.map((item) => (
          <CenteredContainer key={item.id}>
            <img src={item.src} alt={item.title} />
            <p>{item.brand}</p>
            <h3>{item.title}</h3>
            <p>{item.rating}</p>
            <p>{item.price}</p>
          </CenteredContainer>
        ))}
      </StyledContainer>

      <StyledContainer>
        {sliderData.map((item) => (
          <CenteredContainer key={item.id}>
            <img src={item.src} alt={item.title} />
            <p>{item.brand}</p>
            <h3>{item.title}</h3>
            <p>{item.rating}</p>
            <p>{item.price}</p>
          </CenteredContainer>
        ))}
      </StyledContainer>
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
  flex-wrap: wrap;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
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
const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 55px;
  margin: 19px;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
  width: 223px;
  opacity: 0.8;
`;

export default CategorieProducts;
