import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const StyledListCard = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  border: 1px solid #eaeaea;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  color: black;

  @media (max-width: 830px) {
    flex-wrap: wrap;
  }

  img {
    width: 250px;
    height: 250px;
    margin-right: 56px;
  }

  /* div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */

  h3 {
    margin: 0;
    padding: 24px 0px;
  }
  p {
    font-size: 13px;
    font-weight: 400;
    margin: 0px;
  }

  ul {
    padding: 0px;
    line-height: 33px;
  }
  .CenterBox {
    width: 715px;
  }

  .LastBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 268px;
  }
  h4 {
    font-size: 32px;
  }
  button {
    width: 191px;
    height: 44px;
    margin: 18px 0px;
    background-color: #f5c34b;
  }
  .miniBox {
    display: flex;
    width: 195px;
    justify-content: space-between;
  }
`;

const ListCard = ({ title, description, images, rating  }) => (
  <StyledListCard>
    <div>
      <img alt="example" src={images[0]} />
    </div>
    <div className="CenterBox">
      <p>{title}</p>
      <h3>{description}</h3>
      <p>{rating}</p>
      <ul>
        <li> 16-core Neural Engine for advanced machine learning</li>
        <li>8GB of unified memory so everything you do is fast and fluid</li>
        <li>256GB of super-fast SSD storage launches apps and opens files</li>
        <li>
          7-core GPU with up to 5 times faster graphics for graphics-intensive
        </li>
      </ul>
    </div>
    <div className="LastBox">
      {" "}
      <h4>$899.99</h4>
      <Button>Add to Cart</Button>
      <div className="miniBox">
        <p> Add to Wishlist</p>
        <p>Compare</p>
      </div>
    </div>
  </StyledListCard>
);

export default ListCard;
