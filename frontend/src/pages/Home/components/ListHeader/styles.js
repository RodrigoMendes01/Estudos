import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 8px;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main}
    }

    img {
      transform: ${({ orderBy }) => (
    orderBy === 'asc'
      ? 'rotate(180deg)'
      : 'rotate(0deg)')
};
      transition: transform 0.2s ease-in;
      z-index: -1;
    }
  }
`;
