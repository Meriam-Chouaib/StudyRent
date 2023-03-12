export const LoginModel = {
  fields: {
    email: {
      label: 'signin.email_label',
      name: 'email',
      requiredErrorMessage: 'signin.email_required',
      invaliErrorMessage: 'signin.email_invalid',
    },
    password: {
      label: 'signin.password_label',
      name: 'password',
      requiredErrorMessage: 'signin.password_required',
      invaliErrorMessage: 'signin.password_invalid',
      password_invalid_length: 'signin.password_invalid_length',
    },
  },
  defaultValues: {
    email: '',
    password: '',
  },
};
