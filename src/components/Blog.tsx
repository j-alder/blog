import React, { ReactElement } from 'react';
import { PostSummary } from './PostSummary';
import { Post } from './Post';
import { Post as PostType } from '../types';

interface Props {
  currentPost?: PostType;
  posts?: Array<PostType>;
}

export function Blog({ posts, currentPost }: Props): ReactElement {
  if (currentPost) {
    return (
      <div id="blog">
        <Post post={currentPost} />
      </div>
    );
  }

  return (
    <div id="blog">
      {posts && posts.length > 0 ? (
        posts.map((post) => <PostSummary key={post.title} post={post} />)
      ) : (
        <div>
          <span>No posts found.</span>
        </div>
      )}
    </div>
  );
}

Blog.displayName = 'Blog';
