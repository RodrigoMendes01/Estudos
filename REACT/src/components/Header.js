import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";


function Header (props) {
  return <>
    <h1>{props.title}</h1>
    {props.children}
    <Button onClick={props.onToggleTheme}>
      Mudar Tema
    </Button>
    <hr />
  </>
}

Header.propTypes = {
  onToggleThem: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `R' Blog`,
}

export default Header;
