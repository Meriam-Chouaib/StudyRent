import { IUser } from '../user/user.types';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: IUser;
}

export interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
  statut?: string;
  role?: string;
}

export interface RegisterResponse {
  //   token: string;
  user: IUser;
}
export interface DecodedToken {
  sub: string;
  iat: number;
  exp: number;
}
