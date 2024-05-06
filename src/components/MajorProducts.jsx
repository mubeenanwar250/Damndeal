// import React from "react";
// import styled from "styled-components";
import cloths from "../assets/svgs/images (8).svg";
import Headphone from "../assets/svgs/images (9).svg";
import vegitable from "../assets/svgs/images (10).svg";
import sofa from "../assets/svgs/images (11).svg";
import sport from "../assets/svgs/images (12).svg";
import phone from "../assets/svgs/images (13).svg";



import React from "react";
import styled from "styled-components";
import { content_width } from "../consts";

function MajorProducts() {

  const productsData = [
    {
      title: "Major saving",
      items: [
        {
          image: cloths,
          alt: "Cloths",
          description: "Up to 25% off tech",
        },
        {
          image: Headphone,

          alt: "Headphone",
          description: "Up to 25% off tech",
        },
        {
          image: vegitable,

          alt: "Vegetable",
          description: "Up to 75% off grocery",
        },
      ],
    },
    {
      title: "More Products",
      items: [
        {
          image: sofa,

          alt: "Sofa",
          description: "Up to 30% off home",
        },
        {
          image: sport,

          alt: "Sport",
          description: "Up to 15% off sports",
        },
        {
          image: phone,

          alt: "Phone and Camera",
          description: "Phone and Camera",
        },
      ],
    },
  ];
  

  
  return (
    <MainContainer>
      <Container>
        <div>
          <h3>Major saving</h3>
        </div>
        <div>
          {productsData.map((product, index) => (
            <Row key={index}>
              {product.items.map((item, idx) => (
                <CenteredContainer key={idx}>
                  <img src={item.image} alt={item.alt} />
                  <p>{item.description}</p>
                </CenteredContainer>
              ))}
            </Row>
          ))}
        </div>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
  padding: 80px 0px;
`;

const Container = styled.div`
  max-width: 1254px;
  margin: 0 auto;
  border: 1px solid #EAEAEA;
  text-align: left;
  h3 {
    margin-left: 54px;
  }
`;

const Row = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 359px;
  img {
    width: 100%;
  }
`;

export default MajorProducts;

