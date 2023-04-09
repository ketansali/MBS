import styled from 'styled-components';
import { palette } from 'styled-theme';

const StatusTag = styled.span`
  padding: 0 5px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: ${palette('primary', 0)};
  font-size: 12px;
  color: #ffffff;
  text-transform: capitalize;

  
  &.active {
    background-color: ${palette('success', 0)};
  }

  &.inActive {
    background-color: ${palette('error', 0)};
  }
`;

export {StatusTag}

