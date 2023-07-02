import styled from "styled-components";
import { palette } from 'styled-theme';

const AddItemButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    align-items: center;
`;

const PaginationWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin-top:20px
`;
const ActionWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items:baseline;

  div {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }

    i {
      font-size: 18px;
      color: ${palette('primary', 0)};

      &:hover {
        color: ${palette('primary', 4)};
      }
    }

    &.deleteBtn {
      i {
        color: ${palette('error', 0)};

        &:hover {
          color: ${palette('error', 2)};
        }
      }
    }
   
  }
`;
export {
    AddItemButtonWrapper,
    PaginationWrapper,
    ActionWrapper
}


