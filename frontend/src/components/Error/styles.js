import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.danger.main};

    img {
      width: 50px;
      height: 50px;
    }
  }
`;
