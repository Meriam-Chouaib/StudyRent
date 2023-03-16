import { LoginResponse, RegisterResponse } from './auth.api.types';

export const decodeRegisterResponse = (response: RegisterResponse): RegisterResponse => {
  console.log('hhhhhhhhhhhhhhhh', response);
  return {
    ...response,
  };
};
export function decodeLoginResponse(response: LoginResponse): LoginResponse {
  return { ...response };
}
