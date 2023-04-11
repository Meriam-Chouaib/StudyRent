import { IUser } from '../user/user.types';

export interface Image {
  fileName: string;
}
export interface Post {
  id: number;
  datePost: Date;
  title: string;
  description: string;
  posterId: number;
  likes: number;
  poster?: IUser;
  images?: Image[];
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
}

// List posts response
export interface PostResponseData {
  status: number;
  data: PostData[];
  message: string;
}

export interface PostData {
  id: number;
  datePost: string;
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
