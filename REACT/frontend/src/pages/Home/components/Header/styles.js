import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: 8px 16px;
    border: solid 2px ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff
    }
  }
`;
