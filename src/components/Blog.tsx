import React, { ReactElement, useEffect, useState } from 'react';
import { PostSummary } from './PostSummary';
import { useParams } from 'react-router-dom';
import { Post } from './Post';
import { Post as PostType } from '../types';
import { fmtTitle } from '../util/strings';

interface Props {
  posts?: Array<PostType>;
}

export function Blog({ posts }: Props): ReactElement {
  const params = useParams<{ title?: string }>();
  const [currentPost, setCurrentPost] = useState<PostType>();

  useEffect(() => {
    let post = posts?.[0];
    if (params.title) {
      post = posts?.find((post) => fmtTitle(post.title) === params.title);
    }
    if (post) {
      setCurrentPost(post);
    }
  }, [posts, params]);

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
