import { Paginator } from '../../../common/common.interfaces';

export interface IUser {
  id: number;
  email: string;
  password: string;
  username?: string;
  statut?: string;
  role: string;
  isLogged?: boolean;
  university?: string;
  universityAddress?: string;
  image?: string;
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface userState {
  user: IUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  token?: string | null;
}
export interface ResponseUsers {
  users: IUser[];
  nbPages: number;
  nbUsers: number;
  currentPage: number;
}
export const initialUsersPaginator: Paginator = {
  page: 1,
  rowsPerPage: 9,
  search: '',
};
