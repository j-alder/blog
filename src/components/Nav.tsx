import React, { ReactElement } from 'react';
import { Post } from '../types';
import { Blurb } from './Blurb';

interface Props {
  posts?: Array<Post>;
}

export function Nav({ posts }: Props): ReactElement {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [activeSection, setActiveSection] = React.useState<string>();

  /**
   * Determine if a section is active and return 'active' or empty string
   * @param section - section name
   */
  function isActive(section: string): string {
    if (activeSection === section) {
      return 'active';
    }
    return '';
  }

  /**
   * Set a section to active or set activeSection to undefined if section already active
   * @param section - section name
   */
  function setActive(section: string): void {
    return setActiveSection((currActiveSection) => {
      if (currActiveSection === section) {
        return;
      }
      return section;
    });
  }

  return (
    <div id="nav" className={`flex-column ${expanded ? 'expanded' : ''}`}>
      <div className="nav__header">
        <div className="flex-row nav__expand-collapse">
          <button onClick={() => setExpanded((exp) => !exp)}>
            <i className={`fas fa-plus ${expanded ? 'expanded' : ''}`}></i>
          </button>
        </div>
        <Blurb />
      </div>
      <div className="flex-column">
        {/* about */}
        <div className={`flex-column nav__drawer-header ${isActive('about')}`}>
          <button onClick={() => setActive('about')}>ABOUT</button>
          <hr />
        </div>
        <div className={`nav__section ${isActive('about')}`}>
          <span>
            I'm a software developer navigating the tech industry in Richmond,
            Virginia. This blog is meant to be as wandering as my interests,
            which typically revolve around bicycling, camping, programming and
            preparing to be a dad.
          </span>
        </div>

        {/* archive */}
        <div
          className={`flex-column nav__drawer-header ${isActive('archive')}`}
        >
          <button onClick={() => setActive('archive')}>ARCHIVE</button>
          <hr />
        </div>
        <div className={`nav__section ${isActive('archive')}`}>
          <ul id="posts">
            {posts ? (
              posts.map((post) => (
                <li key={post.created}>
                  <button>{post.title}</button>
                </li>
              ))
            ) : (
              <span>No posts in archive.</span>
            )}
          </ul>
        </div>
      </div>

      {/* social media */}
      <div className="nav__media-links">
        <a
          href="https://github.com/j-alder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github-square nav__media-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jonathonalder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin nav__media-icon"></i>
        </a>
      </div>
    </div>
  );
}

Nav.displayName = 'Nav';
