import React, { ReactElement } from 'react';

interface Props {
  desktop: boolean;
  navExpanded: boolean;
}

export function Blurb(props: Props): ReactElement {
  return (
    <div
      id="blurb"
      className={`${props.desktop && !props.navExpanded ? 'centered' : ''}`}
    >
      {props.desktop && !props.navExpanded ? (
        <>
          <span className="blurb__initial">J</span>
          <span className="blurb__initial">A</span>
        </>
      ) : (
        <>
          <span className="blurb__title">J. ALDER</span>
          <span className="blurb__intro">code, bikes, dad stuff</span>
        </>
      )}
    </div>
  );
}

Blurb.displayName = 'Blurb';
