import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;
    margin-left: 8px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.main}
  }
`;
