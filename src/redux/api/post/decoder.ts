import { Image, Post, PostResponse, PostResponseData } from './post.types';

export function decodePosts(result: PostResponseData): Post[] {
  const decoded: Post[] = result.data.map((res) => {
    const decodedPost: Post = {
      ...res,
      images: res.files?.map((fileRes) => {
        const decodedFileRes: Image = {
          fileName: fileRes.filename,
        };
        return decodedFileRes;
      }),
      datePost: new Date(res.datePost),
      price: Number.parseInt(res.price),
      postal_code: Number.parseInt(res.postal_code),
    };
    return decodedPost;
  });
  return decoded;
}
export function decodAddPost(response: PostResponse): PostResponse {
  return { ...response };
}
