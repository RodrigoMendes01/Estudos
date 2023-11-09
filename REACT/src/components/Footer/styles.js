import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.footerBackgroundColor};
  height: 70px;
  display: flex;
  align-items: center;
  margin-top: 74vh;
  padding: 0 24px;
  border-radius: 10px;
  justify-content: space-between;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;
