import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const scaleIn = keyframes`
  from {transform: scale(0);}
  to {transform: scale(1);}
`;

export const OverLay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04) ;
  max-width: 450px;
  width: 100%;
  animation: ${scaleIn} 0.3s;

  > h1 {
    font-size: 22px;
    color: ${({ danger, theme }) => (danger
    ? theme.colors.danger.main
    : theme.colors.gray[900])
};
  }

  .modal-body {
    margin-top: 24px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancelButton {
    background-color: transparent;
    border: none;
    font-size: 16px;
    margin-right: 24px;
    color: #bcbcbc
  }
`;
