import React, { ReactElement } from 'react';
import { Post } from '../types';

interface Props {
  post: Post;
}

export function PostSummary({ post }: Props): ReactElement {
  return (
    <div id="post-summary">
      <span>{post.title}</span>
      <span>{post.created}</span>
      <span>{post.updated}</span>
      <span>{post.summary}</span>
    </div>
  );
}

PostSummary.displayName = 'PostSummary';
