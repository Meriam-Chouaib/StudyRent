import { IUser } from '../user/user.types';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status?: number;
  data: {
    token: string;
    user: IUser;
  };
  message: string;
}

export interface IRegisterRequest {
  username: string;
  email: string;
  password: string;
  statut?: string;
  role?: string;
}

export interface RegisterResponse {
  status?: number;
  data: {
    token: string;
    user: IUser;
  };
  message: string;
}
export interface DecodedToken {
  sub: string;
  iat: number;
  exp: number;
}
export interface UserResponse {
  data: IUser;
  status: number;
  message: string;
}
