import { LoginResponse, RegisterResponse } from './auth.api.types';

export const decodeRegisterResponse = (response: RegisterResponse): RegisterResponse => {
  return {
    ...response,
  };
};
export function decodeLoginResponse(response: LoginResponse): LoginResponse {
  return response;
}
