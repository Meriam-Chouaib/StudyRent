import { Image, Post, PostResponse, PostResponseData, SinglePostResponseData } from './post.types';

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
export function decodePost(response: SinglePostResponseData): Post {
  const decodedPost: Post = {
    ...response.data,
    images: response.data.files?.map((fileRes) => {
      const decodedFileRes: Image = {
        fileName: fileRes.filename,
      };
      return decodedFileRes;
    }),
    datePost: new Date(response.data.datePost),
    price: Number.parseInt(response.data.price),
    postal_code: Number.parseInt(response.data.postal_code),
  };
  return decodedPost;
}
