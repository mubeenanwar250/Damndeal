import React from "react";
import styled from "styled-components";
const ShopPageSideFilter = () => {
  return (
    <div>
      <div>
        <h3>Department</h3>
        <StyledUl>
          <Styledli>
            <StyledSelect id="fruitSelect">
              <option value="apple">Electronics</option>
              <option value="orange">Orange</option>
              <option value="banana">Banana</option>
              <option value="grape">Grape</option>
            </StyledSelect>
          </Styledli>
          <Styledli>
            <StyledSelect id="fruitSelect">
              <option value="apple">Computers & Accessories</option>
              <option value="orange">Orange</option>
              <option value="banana">Banana</option>
              <option value="grape">Grape</option>
            </StyledSelect>
          </Styledli>
          <StyledLi>Computer & Tablets</StyledLi>
          <StyledLi>Desktops</StyledLi>
          <StyledLi>Laptops</StyledLi>
          <StyledLi>tablets</StyledLi>
        </StyledUl>
        <StyledHr />
      </div>
      {/* <CheckBoxFilters>
        <h3>CPU Manufacturer</h3>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox>AMD</Checkbox>
          <Checkbox>Apple</Checkbox>
          <Checkbox>Intel</Checkbox>
          <Checkbox>NVIDIA</Checkbox>
          <Checkbox>Qualcomm</Checkbox>
          <p>Show More</p>
        </div>
        <StyledHr />
      </CheckBoxFilters> */}
    </div>
  );
};
export default ShopPageSideFilter;
const StyledUl = styled.ul`
padding: 0px;
`;
const StyledLi = styled.li`
  padding-left: 18px;
  padding-top: 15px;
  cursor: pointer;
  list-style: none;
`;
const Styledli = styled.li`
  padding-top: 15px;
  list-style: none;

`;
const StyledSelect = styled.select`
  border: none;
  outline: none;
  direction: rtl;
  cursor: pointer;
`;
const StyledHr = styled.hr`
  width: 15rem;
  margin-top: 20px;
`;
const CheckBoxFilters = styled.div``;