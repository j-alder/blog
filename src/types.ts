export interface Post {
  title: string;
  created: string;
  updated?: string;
  content: string;
  tags: Array<string>;
  summary: string;
}

export function isPost(item: { [key: string]: any }): item is Post {
  return (item as Post).created !== undefined;
}
