import React from "react";
import PropTypes from "prop-types"
import PostHeader from "./PostHeader"
import Button from "./Button";

function Post(props) {
  return <>
    <article>
      <PostHeader
        post={{
          id: props.post.id,
          title: props.post.title,
          subtitle: props.post.subtitle,
          read: props.post.read
        }}
      />
      <br />
      <span>Likes: {props.post.likes}</span><br />
      <Button onClick={() => props.onRemove(props.post.id)}>
        Remover
      </Button>
    </article>
    <br />
  </>
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired
}

export default Post