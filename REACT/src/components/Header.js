import React from "react";
import PropTypes from "prop-types";


function Header (props) {
  return <>
    <h1>{props.title}</h1>
    {props.children}
    <hr />
  </>
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

Header.defaultProps = {
  title: `R' Blog`,
}

export default Header;