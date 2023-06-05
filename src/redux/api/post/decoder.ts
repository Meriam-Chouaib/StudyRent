import { omitKey } from '../../../utils/omitKey';
import { UserResponse, UsersResponse } from '../auth/auth.api.types';
import { IUser, ResponseUsers } from '../user/user.types';
import {
  AllPostsLocalizations,
  FilePost,
  Image,
  Post,
  PostLocalizationResponse,
  PostResponse,
  PostResponseData,
  PostsLocalizations,
  SinglePostEditResponse,
  SinglePostResponseData,
  SinglePostlocalization,
} from './post.types';

export function decodePosts(result: PostResponseData): PostsLocalizations {
  console.log('result', result);

  const posts: Post[] = result.data.posts.map((res) => {
    const decodedPost: Post = {
      ...res,

      images: res.files?.map((fileRes) => {
        return new File([], `${fileRes.filename}`);
      }),
      datePost: new Date(res.datePost),
      price: Number.parseInt(res.price),
      postal_code: Number.parseInt(res.postal_code),
    };
    return decodedPost;
  });
  const dataToSend: PostsLocalizations = {
    posts: posts,
    localizations: result.data.localizations,
    nbPages: result.data.nbPages,
  };
  return dataToSend;
}

// ________________________ decod add post ____________________________________
export function decodAddPost(response: PostResponse): PostResponse {
  return { ...response };
}
export function decodePost(response: SinglePostEditResponse): SinglePostlocalization {
  //  decod post to change files to images
  const decodedPost = {
    ...response.data.post,

    images: response.data.post.files?.map((fileRes) => {
      const fileReceived: FilePost = new File([], `${fileRes.filename}`);
      fileReceived.isNew = false;
      return fileReceived;
    }),
    // datePost: new Date(response.data.datePost),
    price: Number.parseInt(response.data.post.price),
    postal_code: Number.parseInt(response.data.post.postal_code),
  };
  const postResponseOmitted = omitKey('files', decodedPost);

  const dataToSend: SinglePostlocalization = {
    post: postResponseOmitted,
    localization: response.data.localization,
    owner: response.data.owner,
  };

  return dataToSend;
}

// ________________________ decod edit post ____________________________________

export function decodeEditPost(response: SinglePostEditResponse): PostResponse {
  const decodedPost: Post = {
    id: response.data.post.id,
    images: response.data.post.files?.map((fileRes) => {
      const fileReceived: FilePost = new File([], `${fileRes.filename}`);
      fileReceived.isNew = false;
      return fileReceived;
    }),
    price: Number.parseInt(response.data.post.price),
    postal_code: Number.parseInt(response.data.post.postal_code),
    surface: Number(response.data.post.surface),
    nb_roommate: Number(response.data.post.nb_roommate),
    title: response.data.post.title,
    description: response.data.post.description,
    likes: Number(response.data.post.likes),
    nb_rooms: Number(response.data.post.nb_rooms),
    city: response.data.post.city,
    state: response.data.post.state,
    isLocated: false,
  };

  const res: PostResponse = {
    post: decodedPost,
    message: response.message,
    status: response.status,
  };
  return res;
}

export function decodEditUser(response: UserResponse): UserResponse {
  return { ...response };
}
export function decodGetUsers(response: ResponseUsers): ResponseUsers {
  return response;
}
