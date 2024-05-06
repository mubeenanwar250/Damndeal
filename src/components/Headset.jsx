import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { content_width } from "../consts";

const Headset = (props) => {
  return (
    <MainContainer>
      <Container>
        <Col>
          <Image src={props.img} alt="" />
        </Col>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
`;
const Container = styled(Row)`
  margin: 100px 0px;
  padding: 0;
`;

const Image = styled.img`
  width: 100%; /* Set image width to 100% */
  height: auto; /* Maintain aspect ratio */
`;
export default Headset;
