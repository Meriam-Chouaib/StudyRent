export const ContactModel = {
  fields: {
    email: {
      label: 'home.email_label',
      name: 'email',
      requiredErrorMessage: 'home.email_required',
      invaliErrorMessage: 'home.email_invalid',
    },
    message: {
      label: 'home.message_label',
      name: 'username',
      requiredErrorMessage: 'home.message_required',
      invaliErrorMessage: 'home.message_invalid',
    },
  },
  defaultValues: {
    email: '',
    message: '',
  },
};
