import { IUser } from '../types/IUser';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: IUser;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token: string;
  user: IUser;
}
