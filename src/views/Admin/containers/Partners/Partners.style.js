import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledPartners = styled.div`
  margin: 0px;
  .ant-table-thead {
    display: none;
  }
  .ant-table-tbody {
    tr:nth-child(even) {
      background-color: #d9d9d9;
    }
  }
  .wrapper {
    background-color: ${COLORS.white};
    padding: 50px;
  }
`;
