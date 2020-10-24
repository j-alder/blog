import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Post } from '../types';
import { Nav } from './Nav';
import { Blog } from './Blog';
import { getAllPosts } from '../util/aws';
import { NotFound } from './NotFound';

export function Main(): ReactElement {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(false);

  /* load posts on mount */
  useEffect(() => {
    if (!loading && !posts) {
      setLoading(true);
      (async () => {
        const getPosts = await getAllPosts();
        if (getPosts) {
          setPosts(getPosts);
        } else {
          setPosts([]);
        }
        setLoading(false);
      })();
    }
  }, [posts, loading]);

  return (
    <div id="app">
      <Router>
        <Nav posts={posts} />
        <Switch>
          <Route path={['/', '/blog', '/blog/post/:title']}>
            <Blog posts={posts} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
