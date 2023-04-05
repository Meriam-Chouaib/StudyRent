import { Post, Result } from './post.types';

export function decodPosts(result: Result): Post[] {
  console.log('decoder', result.data);

  return result.data;
}
export function decodAddPost(response: Post): Post {
  return { ...response };
}
