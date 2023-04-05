import { IUser } from '../user/user.types';

export interface Post {
  id: number;
  datePost: Date;
  title: string;
  description: string;
  posterId: number;
  likes: number;
  poster: IUser;
  files: Files[];
  nbRooms: number;
  surface: number;
  price: number;
  nbRoommate: number;
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
  nbRoommate: number;
  nbRooms: number;
  postal_code: number;
  city: string;
  state: string;
  files: Files[];
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
