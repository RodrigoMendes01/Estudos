import React from "react";
import PropTypes from "prop-types"
import PostHeader from "../PostHeader/PostHeader.js"
import Button from "../Button/Button.js";

import { Rate, Container } from './styles.js'

function Post(props) {
  return <>
    <Container removed={props.post.removed}>
      <PostHeader
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          subtitle: props.post.subtitle,
          read: props.post.read
        }}
      />
      <Rate>Likes: {props.post.likes}</Rate><br />
      <Button onClick={() => props.onRemove(props.post.id)}>
        Remover
      </Button>
    </Container>
    <br />
  </>
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    removed: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}

export default Post
