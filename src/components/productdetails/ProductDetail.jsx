import React, { useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Breadcrumb, Button } from "antd";
import { cardData } from "../../Data/Data"; // Assuming cardsData contains the product information
import { CiHeart } from "react-icons/ci";
import { IoBarChartSharp } from "react-icons/io5";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { FaShareAlt } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { Select, Space } from "antd";
import FaqsScreen from "./Faqscreen";

const { Option } = Select;
const breadCrumbFilterData = [
  { title: "Home" },
  { title: "Electonics" },
  { title: "Computers" },
  { title: "Laptops" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const secondColRef = useRef();
  console.log(cardData, "sfdd");

  // Find the product with the matching ID
  const product = cardData.find((product) => product.id == id);

  // If product is not found, you can display a message or handle it as needed
  if (!product) {
    return <div>Product not found</div>;
  }

  const handleImageClick = (imageUrl) => {
    secondColRef.current.src = imageUrl;
  };

  function handleChange(value) {
    console.log(`Selected ${value}`);
  }

  return (
    <ProductDetailWrapper>
      <Breadcrumb items={breadCrumbFilterData} />

      <StyledRow>
        <div>
          <ImageWrapper>
            {product?.images?.map((image, index) => (
              <ImageItem
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </ImageWrapper>
        </div>
        <div>
          <ProductImage
            ref={secondColRef}
            src={product?.images[0]}
            alt="Selected Image"
          />
        </div>
        <div>
          <ProductDescription>
            <ParentBox>
              <p className="left-border">{product.title}</p>
              <p className="reviews">{product.rating}</p>
            </ParentBox>
            <h3 className="des-box">{product.description}</h3>
            <div className="prize-box">
              <h4>$3.399</h4>
              <h5>$1,419.92</h5>
            </div>
            <div className="addtocart">
              <div className="subAddbtn">
                <button className="subbtn">-</button>
                <p>3</p>
                <button className="addbtn">+</button>
              </div>
              <ShopNowButton>Add to Cart</ShopNowButton>
            </div>
            <ShopButton>Buy now</ShopButton>

            <div className="parentbox">
              <div className="flexview">
                <CiHeart />
                <p>wishlist</p>
              </div>
              <div className="flexview">
                <IoBarChartSharp />
                <p>compare</p>
              </div>
              <div className="flexview">
                <TbMessageCircleQuestion />
                <p>Ask a Question</p>
              </div>
              <div className="flexview">
                <FaShareAlt />
                <p>Share</p>
              </div>
            </div>
            <div style={{ paddingBottom: "24px", borderBottom: "1px solid" }}>
              <div className="contentparent">
                <CiDeliveryTruck
                  style={{ fontSize: "33px", marginBottom: "52px" }}
                />
                <div className="parabox">
                  <p>
                    Free shipping, arrives by Thu, Jun 2 to Sacramento, 95829
                  </p>
                  <p>
                    Want it faster? Add an address to see options More options
                  </p>
                </div>
              </div>
              <div className="contentparent">
                <CiShop style={{ fontSize: "33px", marginBottom: "52px" }} />

                <div className="parabox">
                  <p>Sold and shipped by</p>
                  <h5>TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</h5>
                  <p>⭐ ⭐ ⭐ ⭐ ⭐ 10,000 reviews</p>
                </div>
              </div>
              <div className="contentparent">
                <MdOutlineFreeCancellation style={{ fontSize: "33px" }} />
                <p style={{ padding: "0px 15px" }}>Sold and shipped by</p>
                <a href="">Details</a>
              </div>
            </div>
            <div>
              <h5>More seller options (2)</h5>
              <p>Starting from $1,249.00</p>
              <a href="">Compare all sellers</a>
            </div>
          </ProductDescription>
        </div>
      </StyledRow>
      <Container>
        <div>
          <h5>Overview</h5>
          <p>
            The first notebook of its kind, this Apple MacBook Pro is a beast.
            With the blazing-fast M1 Pro chip — the first Apple silicon designed
            for pros — you get groundbreaking performance and amazing battery
            life. Add to that a stunning Liquid Retina XDR display, the best
            camera and audio ever in a Mac notebook, and all the ports you need.
          </p>
          <Select
            defaultValue="See More"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
              {
                value: "disabled",
                label: "Disabled",
                disabled: true,
              },
            ]}
          />
        </div>
        <MoreBox>
          <label htmlFor="moreInfo">More Information:</label>
          <Select
            id="moreInfo"
            defaultValue="para"
            style={{ width: 600 }}
            onChange={handleChange}
          >
            <Option value="para">Information</Option>
            <Option value="paragraph1">
              <h3>Powerful performance</h3>
              <ul>
                <li>English-language MacBook Pro </li>
                <li>
                  10-core Apple M1 Pro chip for a giant leap in CPU, GPU, and
                  machine learning performance
                </li>
                <li>16GB of RAM so everything you do is fast and fluid</li>
                <li>16-core GPU </li>
                <li>
                  Ultrafast 1TB solid state drive (SSD) is blazing fast, so you
                  can take all your photos and videos with you no matter.
                </li>
              </ul>
            </Option>
            <Option value="paragraph2">
              <h3>Display and audio</h3>
              <ul>
                <li>
                  16.2-inch liquid retina XDR display delivers a responsive and
                  natural viewing experience
                </li>
                <li>
                  3456 x 2234 native resolution with support for millions of
                  colours
                </li>
                <li>
                  ProMotion technology for adaptive refresh rates up to 120Hz
                </li>
                <li>
                  Studio-quality three-mic array with high signal-to-noise ratio
                  and directional beamforming
                </li>
                <li>
                  High fidelity six speaker sound system with forece-cancelling
                  woofers
                </li>
              </ul>
            </Option>
          </Select>
        </MoreBox>
        <FaqsScreen/>
        {/* test  */}

        {/* test */}
      </Container>
    </ProductDetailWrapper>
  );
};
const StyledParagraph = styled.p`
  margin: 0;
  padding: 8px;
`;

const MoreBox = styled.p`
  max-width: 769px;
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  align-items: center;
`;

const ProductDetailWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0px;
`;
const Container = styled.div`
  max-width: 800px;
  text-align: left;
  margin-top: -140px;
  @media (max-width: 1300px) {
    margin-top: 10px;
  }
  Select {
    border-radius: 33px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 700px;
  height: 600px;
`;

const ProductDescription = styled.div`
  padding: 20px;
  width: 457px;
  text-align: left;
  .left-border {
    border-right: 1px solid black;
    padding-right: 34px;
  }
  .reviews {
    padding-left: 20px;
  }
  .des-box {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }
  .prize-box {
    display: flex;
    h4 {
      padding-right: 10px;
    }
    h5 {
      text-decoration: line-through;
    }
  }
  .addtocart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .subAddbtn {
      display: flex;
      justify-content: space-between;
      width: 113px;
      border: 1px solid;
      border-radius: 30px;
      padding: 0px 26px;

      align-items: center;
      .subbtn {
        background-color: transparent;
        border: none;
      }
      .addbtn {
        border-radius: 30px;
        height: 34px;
        width: 36px;
        border: none;
      }
    }
  }
  .parentbox {
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
    border-bottom: 1px solid;
    .flexview {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        padding-left: 23px;
      }
    }
  }

  .contentparent {
    display: flex;
    align-items: center;
    .parabox {
      padding-left: 20px;
    }
  }
`;

const ParentBox = styled.div`
  display: flex;
`;

const ShopNowButton = styled(Button)`
  background: #f5c34b;
  color: black;
  border: none;
  height: 46px;
  width: 199px;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 14px;
`;

const ShopButton = styled(Button)`
  background: none;
  color: black;
  border: 1px solid #f5c34b;
  height: 46px;
  width: 459px;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 14px;
  margin-top: 20px;
`;

export default ProductDetail;
