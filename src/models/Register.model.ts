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
      requiredErrorMessage: 'signup.password_required',
      invaliErrorMessage: 'signup.username_invalid',
      password_invalid_length: 'signup.password_invalid_length',
    },
    confirm_password: {
      label: 'signup.password_confirm',
      name: 'password',
      requiredErrorMessage: 'signup.password_required',
      invaliErrorMessage: 'signup.username_invalid',
    },
  },
  defaultValues: {
    email: '',
    password: '',
    username: '',
  },
};
