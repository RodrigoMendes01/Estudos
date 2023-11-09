import React, { useMemo } from "react";
import { useParams, useLocation } from 'react-router-dom';

function Post() {
  const params = useParams();
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [ search ])

  return <h1>POST por id</h1>
};

export default Post;
