import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 0 16px;
  height: 52px;
  border: none;
  background-color: #5061fc;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #6674f4;
  }

  &:active {
    background: #3346f0;
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ danger }) => danger && css`
    background: #fc5050;

    &:hover {
    background: #f97171;
    }

    &:active {
      background: #f63131;
    }

  `}
`;
