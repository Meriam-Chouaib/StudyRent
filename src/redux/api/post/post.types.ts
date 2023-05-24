import { IUser } from '../user/user.types';

export interface Image {
  fileName: string;
}
export interface Post {
  id: number;
  datePost?: Date;
  title: string;
  description: string;
  posterId?: number;
  likes: number;
  poster?: IUser;
  images?: File[];
  nb_rooms: number;
  surface: number;
  price: number;
  nb_roommate: number;
  city: string;
  state: string;
  isLocated: boolean;
  postal_code: number;
}
export interface IPostRequest {
  title: string;
  description: string;
  price: number;
  surface: number;
  nb_roommate: number;
  nb_rooms: number;
  postal_code: number;
  city: string;
  state: string;
  images: File[];
  posterId: number;
}
export interface PostResponse {
  post: Post;
  status?: number;
  message?: string;
}
export interface Files {
  id: number;
  filename: string;
  postId: number;
}
export interface params {
  page: number;
  rowsPerPage: number;
  filter: string;
}

export interface PostState {
  post: Post | null;
  isLoading: boolean;
  error?: string | null;
  isSuccess?: boolean;
}

// List posts response

export interface SinglePostResponseData {
  status: number;
  data: PostData;
  message: string;
}
export interface SinglePostEditResponse {
  status: number;
  data: PostLocalizationResponse;
  message: string;
}
export interface SinglePostlocalization {
  post: Post;
  localization: Localization;
}
// ________________________________ types of data sended to front_______________________

// ________________________________ response get posts from back_______________________
export interface PostLocalizationResponse {
  post: PostData;
  localization: Localization;
}
export interface PostResponseData {
  status: number;
  data: AllPostsLocalizations;
  message: string;
}
export interface AllPostsLocalizations {
  posts: PostData[];
  localizations: Localization[];
  nbPages?: number;
}
export interface PostsLocalizations {
  posts: Post[];
  localizations: Localization[];
  nbPages?: number;
}
export interface Localization {
  longitude: number;
  latitude: number;
}
export interface PostData {
  id: number;
  datePost: Date;
  title: string;
  description: string;
  posterId: number;
  likes: number;
  nb_rooms: number;
  surface: number;
  price: string;
  nb_roommate: number;
  city: string;
  state: string;
  isLocated: boolean;
  postal_code: string;
  files: FileData[];
}

export interface FileData {
  id: number;
  filename: string;
  path: string;
  postId: number;
}
export interface FilePost extends File {
  isNew?: boolean;
}
