import styled from "styled-components";

export default Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 5px;
  margin-top: 5px;

  a {
    color: ${({ theme }) => theme.aTextColor};
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
  }
`;
