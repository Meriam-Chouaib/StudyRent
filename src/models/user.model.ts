export const UserModel = {
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
      invaliErrorMessage: 'signup.password_invalid',
      password_invalid_length: 'signup.password_invalid_length',
    },
    role: {
      label: 'signup.role_label',
      name: 'role',
      requiredErrorMessage: 'signup.role_required',
    },
    phone: {
      label: 'dashboardProfile.phone',
      name: 'phone',
    },
    university: {
      label: 'dashboardProfile.university',
      name: 'university',
    },

    statut: {
      name: 'statut',
    },
  },
  defaultValues: {
    email: '',
    password: '',
    username: '',
    university: '',
    phone: '',
    role: '',
    statut: 'ONLINE',
  },
};
