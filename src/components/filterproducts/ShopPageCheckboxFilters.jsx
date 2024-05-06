import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
const ShopPageCheckboxFilters = ({ title, options, numbers, style }) => {
  return (
    <StyledCheckboxContainer>
      <StyledH3>{title}</StyledH3>
      <Container>
        <StyledCheckboxFilters>
          {options.map((option, index) => (
            <StyledCheckbox key={index}>{option}</StyledCheckbox>
          ))}
          <StyledPara style={style}>Show More</StyledPara>
        </StyledCheckboxFilters>
        <div>
          {numbers.map((numbers, index) => (
            <p key={index}>{numbers}</p>
          ))}
        </div>
      </Container>

      <StyledHr />
    </StyledCheckboxContainer>
  );
};
export default ShopPageCheckboxFilters;
const StyledCheckboxContainer = styled.div``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

p{
  padding: 0px;
  margin: 11px 0px;
}
`;

const StyledCheckboxFilters = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledCheckbox = styled(Checkbox)`
  padding-top: 10px;
`;
const StyledPara = styled.p`

`;
const StyledH3 = styled.h3``;
const StyledHr = styled.hr`
  width: 15rem;
  margin-top: 20px;
`;
