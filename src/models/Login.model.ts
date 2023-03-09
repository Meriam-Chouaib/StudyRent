export const LoginModel = {
  fields: {
    email: {
      label: 'Email address',
      name: 'email',
      placeholder: 'Enter your email',
      requiredErrorMessage: 'Email required',
      invaliErrorMessage: 'Email invalid',
    },
    password: {
      label: 'Password',
      name: 'password',
      placeholder: 'Enter your password',
      requiredErrorMessage: 'Password required',
      invaliErrorMessage: 'Password invalid',
    },
  },
  defaultValues: {
    email: '',
    password: '',
  },
};
