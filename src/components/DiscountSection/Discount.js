import React from "react";
import { StyledContainer } from "../../styles/Container.style";
import { StyledDiscount } from "./Discount.style";
import DiscountBg from "../../assets/img/discount-bg.svg";

function Discount() {
  return (
    <StyledDiscount>
      <StyledContainer>
        <div className="container">
          <div className="discount">
            <div>
              <h2>-30%</h2>
             <h4>
             На комплект для перехода на 7-ми листовые рессоры ВИС
             </h4>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledDiscount>
  );
}

export default Discount;
