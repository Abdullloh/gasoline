import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const StyledSignIn = styled.div`
  margin: 0px;
  height: calc(100vh - 730px);
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    text-align: center;
    .auth_title {
      font-size: 32px;
      line-height: 37px;
      color: ${COLORS.black};
      padding: 20px 0px;
    }
    .form_block {
      border: 1px solid ${COLORS.darkGrey};
      padding: 70px;
      border-radius: 30px;
      label {
        font-size: 32px;
      }
      /* button {
        font-size: 32px;
        padding: 14px 50px;
        margin: 0px 10px;
      } */
    }
  }
  .sbt_block {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
