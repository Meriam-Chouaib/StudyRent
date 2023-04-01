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
