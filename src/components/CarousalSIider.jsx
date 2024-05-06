import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import modernchair from "../assets/svgs/bg1.svg";
import caroselimage2 from "../assets/svgs/bg.svg";
import { content_width } from "../consts";

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const images = [modernchair, caroselimage2, modernchair];

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % images.length);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? images.length - 1 : prevPage - 1
    );
  };

  return (
    <StyledRow justify="center" align="middle">
      <StyledCol xs={24} md={content_width}>
        <ImageContainer>
          <StyledImage src={images[currentPage]} alt={`Slide ${currentPage}`} />
          <ContentWrapper>
            <LimitedEditionButton>Limited Edition</LimitedEditionButton>
            <HeaderText>Modern</HeaderText>
            <HeaderText>Dining Chair</HeaderText>
            <Paragraph>Discover our new items. Up to 25% Off!</Paragraph>
            <ShopNowButton>Shop now</ShopNowButton>
          </ContentWrapper>
          <PrevButton onClick={goToPreviousPage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </PrevButton>
          <NextButton onClick={goToNextPage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </NextButton>
        </ImageContainer>
      </StyledCol>
    </StyledRow>
  );
};

const StyledRow = styled(Row)`
  margin: 50px 0;
`;


const StyledCol = styled(Col)`
  max-width: ${content_width};
`;

const ImageContainer = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 573px) {
    left: 35%;
  }
`;

const LimitedEditionButton = styled(Button)`
  background: #cecbe2;
  color: black;
  border: none;
  padding: 0px 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 19px;
`;

const HeaderText = styled.h2`
  color: white;
  font-size: 40px;
  position: relative;
  left: 15px;
  line-height: 14px;
`;

const Paragraph = styled.p`
  color: white;
  position: relative;
  left: 85px;
`;

const ShopNowButton = styled(Button)`
  background: #f5c34b;
  color: black;
  border: none;
  padding: 0px 18px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 14px;
`;

const PrevButton = styled.button`
  width: 39px;
  height: 46px;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background-color: white;
  color: grey;
  border: none;
  cursor: pointer;
  border-radius: 50%;
`;

const NextButton = styled.button`
  width: 39px;
  height: 46px;
  padding: 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: white;
  color: grey;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
`;

export default Slider;
