import React, { ReactElement, useEffect, useState } from 'react';
import { PostSummary } from './PostSummary';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Post } from './Post';
import { Post as PostType } from '../types';
import { fmtTitle } from '../util/strings';
import { useQuery } from '../util/url';

interface Props {
  posts?: Array<PostType>;
}

export function Blog({ posts }: Props): ReactElement {
  const filterTag = useQuery().get('tag');
  const params = useParams<{ title?: string; tag: string }>();
  const [currentPost, setCurrentPost] = useState<PostType | undefined>();
  const [filteredPosts, setFilteredPosts] = useState<PostType[] | undefined>();

  useEffect(() => {
    setCurrentPost(undefined);
    if (params.title) {
      const post = posts?.find((post) => fmtTitle(post.title) === params.title);
      if (post) {
        setCurrentPost(post);
      }
    }
    if (filterTag) {
      const postsWithTag = posts?.filter((post) =>
        post.tags.includes(filterTag),
      );
      setFilteredPosts(postsWithTag || []);
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
        <div className="blog_summary-container">
          <span className="blog_summary-title">Blog</span>
          {filterTag && (
            <span className="blog__filtered-message">
              <Link to="/blog" onClick={() => setFilteredPosts(undefined)}>
                <i className="fas fa-times-circle blog__filtered-message_clear-button" />
              </Link>
              viewing entries with tag &quot;{filterTag}&quot;
            </span>
          )}
          {(filteredPosts || posts).map((post) => (
            <PostSummary key={post.title} post={post} />
          ))}
        </div>
      ) : (
        <div>
          <span>No posts found.</span>
        </div>
      )}
    </div>
  );
}
