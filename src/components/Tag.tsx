import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  tag: string;
}

export const Tag: FC<Props> = (props: Props) => {
  return (
    <Link className="post__tag" to={`/blog?tag=${props.tag}`}>
      {props.tag}
    </Link>
  );
};

Tag.displayName = 'Tag';
