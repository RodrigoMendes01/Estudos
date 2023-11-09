import React from "react"
import PropTypes from "prop-types"

import { Subtitle } from "./styles"

function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong><br/>
      <Subtitle>{props.post.subtitle}</Subtitle><br />
    </>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}

export default PostHeader;
