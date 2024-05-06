import React from "react";
import styled from "styled-components";
import facebook from "../assets/svgs/facebook.svg";
import twitter from "../assets/svgs/1.svg";
import instagram from "../assets/svgs/2.svg";
import linkedin from "../assets/svgs/3.svg";
import contactIcon from "../assets/svgs/phone-call 1.png";
import VectorIcon from "../assets/svgs/Vector.png";
import MacIcon from "../assets/svgs/apple 1.png";
import android from "../assets/svgs/android (1) 1.png";
import VisaCard from "../assets/svgs/1.png";
import VisaCard2 from "../assets/svgs/2.png";
import VisaCard3 from "../assets/svgs/3.png";
import VisaCard4 from "../assets/svgs//4.png";
import VisaCard5 from "../assets/svgs//5.png";
import VisaCard6 from "../assets/svgs//6.png";
import { content_width } from "../consts";

const Footer = () => {
  return (
    <MainContain>
      <MainContainer>
        <ContainerBox>
          <h1>Subscribe and get 20% discount.</h1>
          <ParentBox>
            <SearchInput type="text" placeholder="Search" />
            <ShopNowButton>Shop now</ShopNowButton>
          </ParentBox>
        </ContainerBox>
        <Container>
          <Content>
            <h3>Contact Us</h3>
            <ChildParent>
              <span>
                <img src={contactIcon} alt="" />
              </span>
              <div>
                <h6>Monday-Friday: 08am-9pm</h6>
                <p>+(1) 123 456 7890</p>
              </div>
            </ChildParent>
            <ChildParent>
              <span>
                <img src={VectorIcon} alt="" />
              </span>
              <div>
                <h6>Need help with your order?</h6>
                <p>support@damndeal.com</p>
              </div>
            </ChildParent>
          </Content>
          <Content>
            <h3>About Zenmart</h3>
            <LinkBox>
              <TextContent>
                <a>Track Your Order</a>
              </TextContent>
              <TextContent>
                <a>Product Guides</a>
              </TextContent>
              <TextContent>
                <a>Wishlists</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <h3>Customer Support</h3>
            <LinkBox>
              <TextContent>
                <a>Contact Us</a>
              </TextContent>
              <TextContent>
                <a>Help Centre</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <h3>Services</h3>
            <LinkBox>
              <TextContent>
                <a>Trade-In Program</a>
              </TextContent>
              <TextContent>
                <a>Electronics Recycling</a>
              </TextContent>
              <TextContent>
                <a>Best Buy Health</a>
              </TextContent>
            </LinkBox>
          </Content>
          <Content>
            <div>
              <h3>Follow us</h3>
              <LinkParent>
                {[
                  { src: facebook, id: 1 },
                  { src: twitter, id: 2 },
                  { src: instagram, id: 3 },
                  { src: linkedin, id: 4 },
                ].map((item) => (
                  <img src={item.src} key={item.id} alt="Social Media" />
                ))}
              </LinkParent>
            </div>
            <div>
              <h3>Mobile Apps</h3>
              <Parent>
                <img src={MacIcon} alt="" />
                <p>iOS App</p>
              </Parent>
              <Parent>
                <img src={android} alt="" />
                <p>Android App</p>
              </Parent>
            </div>
            <div>
              <h3>We accept</h3>
              <CardBox>
                <img src={VisaCard} alt="" />
                <img src={VisaCard2} alt="" />
                <img src={VisaCard3} alt="" />
                <img src={VisaCard4} alt="" />
                <img src={VisaCard5} alt="" />
                <img src={VisaCard6} alt="" />
              </CardBox>
            </div>
          </Content>
        </Container>
      </MainContainer>
      <SubContainer>
        <FlexBox>
          <p>© 2022 Zeomart. All Rights Reserved</p>
          <p>Privacy · Terms · Sitemap</p>
        </FlexBox>
        <FlexBox className="ftr-one">
          <MainParent>
            <FilterSelect>
              <option value="all">currency USD</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </FilterSelect>
            <FilterSelect>
              <option value="all">Language English</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </FilterSelect>
          </MainParent>
        </FlexBox>
      </SubContainer>
    </MainContain>
  );
};
const MainContain = styled.div`
  background-color: #f3f5f6;
`;
const MainContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
  background-color: #f3f5f6;
  border-bottom: 1px solid black;
  padding: 0px 12px;
`;
const ContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;
const FlexBox = styled.div`
  display: flex;
  /* width: 40%; */
  justify-content: space-between;
  p{
    margin-right: 27px;
  }
`;
const MainParent = styled.div`
  display: flex;
  gap: 20px;
`;
const SubContainer = styled.div`
  max-width: ${content_width};
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const Content = styled.div`
  width: 240px;
  text-align: left;
  margin-bottom: 20px;
`;
const TextContent = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  margin: 10px 0;
`;
const ChildParent = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;
const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const LinkParent = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 20px;
  }
`;
const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 40px;
  }
`;
const Parent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 24px;
    height: 25px;
  }
`;
const ParentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 686px;
  @media (max-width: 730px) {
    width: 20rem;
  }
`;
const SearchInput = styled.input`
  padding: 12px;
  font-size: 16px;
  outline: none;
  width: 540px;
  border: none;
  border-radius: 9px;
  @media (max-width: 730px) {
    width: 20rem;
  }
`;
const ShopNowButton = styled.button`
  background: #f5c34b;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 14px;
`;
const FilterSelect = styled.select`
  font-size: 14px;
  outline: none;
  padding: 0px 45px;
  height: 41px;
  border-radius: 7px;

  @media (max-width: 830px) {
    padding: 0;

}
`;

export default Footer;
