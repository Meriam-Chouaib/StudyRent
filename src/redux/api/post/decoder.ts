import { STATIC_URL } from '../../../config/config';
import { Image, Post, PostResponse, PostResponseData, SinglePostResponseData } from './post.types';

export function decodePosts(result: PostResponseData): Post[] {
  const decoded: Post[] = result.data.map((res) => {
    const decodedPost: Post = {
      ...res,
      //   images: res.files?.map((fileRes) => {
      //     const decodedFileRes: Image = {
      //       fileName: fileRes.filename,
      //     };
      //     return decodedFileRes;
      //   }),
      images: res.files?.map((fileRes) => {
        return new File([], `${fileRes.filename}`);
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
      return new File([], `${fileRes.filename}`);
    }),

    // datePost: new Date(response.data.datePost),
    price: Number.parseInt(response.data.price),
    postal_code: Number.parseInt(response.data.postal_code),
  };
  return decodedPost;
}
export function decodeEditPost(response: SinglePostResponseData): PostResponse {
  const decodedPost: Post = {
    ...response.data,

    images: response.data.files?.map((fileRes) => {
      return new File([], `${fileRes.filename}`);
    }),

    // datePost: new Date(response.data.datePost),
    price: Number.parseInt(response.data.price),
    postal_code: Number.parseInt(response.data.postal_code),
    surface: Number(response.data.surface),
    nb_roommate: Number(response.data.nb_roommate),
  };
  const res: PostResponse = {
    post: decodedPost,
    message: response.message,
    status: response.status,
  };
  return res;
}
