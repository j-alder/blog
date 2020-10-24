import React, { ReactElement } from 'react';

export function Blurb(): ReactElement {
  return (
    <div id="blurb">
      <>
        <span className="blurb__title">J. ALDER</span>
        <span className="blurb__intro">code, bikes, dad stuff</span>
      </>
    </div>
  );
}

Blurb.displayName = 'Blurb';
