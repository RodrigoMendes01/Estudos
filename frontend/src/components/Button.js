import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 52px;
  border: none;
  background-color: #5061fc;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;

  &:hover {
    background: #6674f4;
  }

  &:active {
    background: #3346f0;
  }

  &[disable] {
    background: #ccc;
    cursor: default;
  }
`
