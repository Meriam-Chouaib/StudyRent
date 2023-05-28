export interface IUser {
  id?: number;
  email: string;
  password: string;
  username?: string;
  statut?: string;
  role: string;
  isLogged?: boolean;
  university?: string;
  universityAddress?: string;
}
export interface userState {
  user: IUser | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
  token?: string | null;
}
