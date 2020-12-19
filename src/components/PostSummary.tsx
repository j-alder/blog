import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { fmtDate, fmtTitle } from '../util/strings';

interface Props {
  post: Post;
}

export function PostSummary({ post }: Props): ReactElement {
  const date = fmtDate(post.updated || post.created);
  const url = `/blog/post/${fmtTitle(post.title)}`;
  return (
    <div className="post-summary">
      <Link className="post-summary_top" to={url}>
        <span className="post-summary_title">{post.title}</span>
        <span className="post-summary_date">{date}</span>
      </Link>
      <span className="post-summary_summary">{post.summary}</span>
    </div>
  );
}

PostSummary.displayName = 'PostSummary';
