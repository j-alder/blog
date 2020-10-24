import React, { ReactElement, useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Post } from '../types';
import { Nav } from './Nav';
import { Blog } from './Blog';
import { getAllPosts } from '../util/aws';

export function Main(): ReactElement {
  const [posts, setPosts] = useState<Array<Post>>();
  const [currentPost, setCurrentPost] = useState<Post>();
  const [loading, setLoading] = useState<boolean>(false);

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    console.log('scrolling');
    const currScrollPos = window.pageYOffset;
    console.log(currScrollPos);
    const nav = document.getElementById('nav');
    if (nav) {
      if (prevScrollPos > currScrollPos) {
        nav.style.top = '0';
      } else {
        nav.style.top = '-50px';
      }
      prevScrollPos = currScrollPos;
    }
  };

  /* load posts on mount */
  useEffect(() => {
    if (!loading && !posts) {
      setLoading(true);
      (async () => {
        const getPosts = await getAllPosts();
        if (getPosts) {
          setPosts(getPosts);
          setCurrentPost(getPosts[0]);
        } else {
          setPosts([]);
        }
        setLoading(false);
      })();
    } else if (posts && posts.length > 0) {
      setCurrentPost(posts[0]);
    }
  }, [posts, loading]);

  return (
    <div id="app">
      <Router>
        <Nav posts={posts} />
        <Switch>
          <Route path={['/', '/blog', '/blog/post/:title']}>
            <Blog posts={posts} currentPost={currentPost} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

Main.displayName = 'Main';
