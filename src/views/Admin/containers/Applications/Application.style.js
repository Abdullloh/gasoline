import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledApplication = styled.div`
  .wrapper {
    background-color: ${COLORS.white};
    padding: 50px;
    header {
      padding: 5px 30px;
      background-color: ${COLORS.main};
      margin: 20px 0px;
      h1 {
        font-weight: 400;
        font-size: 36px;
        line-height: 42px;
        color: ${COLORS.white};
        margin: 0px;
      }
    }
  }
`;
