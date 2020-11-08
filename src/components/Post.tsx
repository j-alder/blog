import React, { ReactElement } from 'react';
import { Post as PostType } from '../types';
import { fmtDate } from '../util/strings';

interface Props {
  post: PostType;
}

export function Post({ post }: Props): ReactElement {
  const created = fmtDate(post.created);
  const updated = fmtDate(post.updated);
  return (
    <div id="post">
      <div className="post__title-row">
        <span className="post__title">{post.title}</span>
        <span className="post__date">{created}</span>
        {updated && <span className="post__date">{updated}</span>}
      </div>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <span>{post.tags}</span>
    </div>
  );
}

Post.displayName = 'Post';
