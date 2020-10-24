import React, { ReactElement } from 'react';
import { Post as PostType } from '../types';

/**
 * Format an ISO date string into a readable date
 * @param isoStr
 */
function fmtDate(isoStr?: string) {
  if (!isoStr) {
    return;
  }
  return new Date(isoStr).toLocaleDateString('en-US');
}

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
      <span className="post__content">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc. There are many variations of
        passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which
        don't look even slightly believable. If you are going to use a passage
        of Lorem Ipsum, you need to be sure there isn't anything embarrassing
        hidden in the middle of text. All the Lorem Ipsum generators on the
        Internet tend to repeat predefined chunks as necessary, making this the
        first true generator on the Internet. It uses a dictionary of over 200
        Latin words, combined with a handful of model sentence structures, to
        generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
        is therefore always free from repetition, injected humour, or
        non-characteristic words etc.
      </span>
      <span>{post.tags}</span>
    </div>
  );
}

Post.displayName = 'Post';
