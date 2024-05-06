import React from "react";
import { Card as AntdCard, Button } from "antd";
import styled from "styled-components";

const { Meta } = AntdCard;

const StyledCard = styled(AntdCard)`
  width: 250px;
  p {
    font-size: 13px;
    font-weight: 400;
    margin: 0px;
  }
`;

const Rating = styled.div`
  margin-top: 10px;
  color: #999;
  font-size: 13px;
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Card = ({ title, description, rating, reviews, images }) => (
  <StyledCard hoverable cover={<img alt="example" src={images[0]} />}>
    <p>{title}</p>
    <h5>{description}</h5>
    <Rating>{rating}</Rating>
    <Price>$100</Price>
  </StyledCard>
);

export default Card;
