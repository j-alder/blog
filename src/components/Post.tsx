import React, { ReactElement } from 'react';
import { Post as PostType } from '../types';
import { fmtDate } from '../util/strings';
import { Tag } from './Tag';

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
      <div className="post__tags">
        {post.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <div
        className="post__content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

Post.displayName = 'Post';
