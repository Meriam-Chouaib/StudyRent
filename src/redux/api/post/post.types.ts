import { IUser } from '../user/user.types';

export interface Post {
  id: number;
  datePost: Date;
  title: string;
  description: string;
  posterId: number;
  likes: number;
  poster: IUser;
  files: File[];
  nb_rooms: number;
  surface: number;
  price: number;
  nb_roommate: number;
  region: string;
  city: string;
  state: string;
  country: string;
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
  files?: File[];
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
export interface Result {
  data: Post[];
}
export interface PostState {
  post: Post | null;
  isLoading: boolean;
  error?: string | null;
}
