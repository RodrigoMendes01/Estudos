import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: flex-start;

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;
  }

  strong {
    color: ${({ theme }) => theme.colors.primary.main}
  }
`;
