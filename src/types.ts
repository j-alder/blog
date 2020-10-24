export interface Post {
  title: string;
  created: string;
  updated?: string;
  content: string;
  tags: Array<string>;
  summary: string;
}

export function isPost(item: { [key: string]: any }): item is Post {
  return (
    typeof item['title'] === 'string' &&
    typeof item['created'] === 'string' &&
    typeof item['content'] === 'string'
  );
}
