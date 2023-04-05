import { Post, PostResponse, Result } from './post.types';

export function decodPosts(result: Result): Post[] {
  console.log('decoder', result.data);

  return result.data;
}
export function decodAddPost(response: PostResponse): PostResponse {
  return { ...response };
}
