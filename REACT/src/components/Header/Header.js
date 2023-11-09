import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.js";
import styled from 'styled-components'
import { ThemeContext } from "../App/App.js";

import Title from '../Title'

function Header (props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Title>{props.title}</Title>
      {props.children}
      <Button onClick={props.onToggleTheme}>
        Mudar Tema
      </Button>
      <hr />
  </>
  )
}

Header.propTypes = {
  onToggleThem: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `R' Blog`
}

export default Header;
