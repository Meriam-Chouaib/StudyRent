export const LoginModel = {
  fields: {
    email: {
      label: 'Email',
      name: 'email',
      requiredErrorMessage: 'Email required',
      invaliErrorMessage: 'Email invalide',
    },
    password: {
      label: 'Password',
      name: 'password',
      requiredErrorMessage: 'Password required',
      invaliErrorMessage: 'Password invalide',
    },
  },
  defaultValues: {
    email: '',
    password: '',
  },
};
