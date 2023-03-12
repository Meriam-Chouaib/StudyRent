export const RegisterModel = {
  fields: {
    email: {
      label: 'signup.email_label',
      name: 'email',
      requiredErrorMessage: 'signup.email_required',
      invaliErrorMessage: 'signup.email_invalid',
    },
    username: {
      label: 'signup.username_label',
      name: 'username',
      requiredErrorMessage: 'signup.username_required',
      invaliErrorMessage: 'signup.username_invalid',
    },
    password: {
      label: 'signup.password_label',
      name: 'password',
      requiredErrorMessage: 'signup.required_password',
      invaliErrorMessage: 'signup.invalid_password',
      password_invalid_length: 'signup.password_invalid_length',
    },
    confirm_password: {
      label: 'signup.confirm_password',
      name: 'password',
      requiredErrorMessage: 'signup.required_password',
      invaliErrorMessage: 'signup.invalid_password',
    },
  },
  defaultValues: {
    email: '',
    password: '',
    username: '',
  },
};
