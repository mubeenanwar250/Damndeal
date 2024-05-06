import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from "../../components/CarousalSIider";
import FirstProducts from "../../components/Products";
import MajorProducts from "../../components/MajorProducts";
import BestProducts from "../../components/BestProducts";
import Headset from "../../components/Headset";
import CategorieProducts from "../../components/CategorieProducts";
import Blog from "../../components/Blog";
import SignUpForm from "../../components/SignUpForm";
import {
  products,
  bestProducts,
  categorieProducts,
  HeadSetImage,
  HeadSetImagetwo,
  cardDatalistItems,
  cardlistItems,
  cardsData,
  cardData
} from "../../Data/Data";
import Allproducts from "../../components/allproducts/Allproducts";
import FilterProducts from "../../components/filterproducts/FilterProducts";
import ProductDetail from "../../components/productdetails/ProductDetail";

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/allproducts" element={<Allproducts />} />
      <Route path="/filterproducts" element={<FilterProducts data={cardData} />} />
      <Route path="/productdetails/:id" element={<ProductDetail data={cardsData}  />} />
      
    </Routes>
  );
};
const HomePage = () => {
  return (
    <>
      <Slider />
      <FirstProducts />
      <MajorProducts />
      <BestProducts
        products={products}
        title="Best Seller"
        listItems={cardDatalistItems}
      />
      <Headset img={HeadSetImage} />
      <BestProducts
        products={bestProducts}
        title="Save on TV, video, & home audio"
      />
      <CategorieProducts
        allproducts={categorieProducts}
        title="Shop Categories"
        listItems={cardlistItems}
      />
      <Headset img={HeadSetImagetwo} />
      <BestProducts products={products} title="Top-rated products" />
      <Blog title="Blog Posts" list="See All" />
    </>
  );
};
export default Home;
