export const PostModel = {
  fields: {
    title: {
      label: 'postForm.title_label',
      name: 'title',
      requiredErrorMessage: 'postForm.title_required',
      invaliErrorMessage: 'postForm.title_invalid',
    },
    description: {
      label: 'postForm.description_label',
      name: 'description',
      requiredErrorMessage: 'postForm.description_required',
      invaliErrorMessage: 'postForm.description_invalid',
      password_invalid_length: 'postForm.description_invalid_length',
    },
    price: {
      label: 'postForm.price_label',
      name: 'price',
      requiredErrorMessage: 'postForm.price_required',
      invaliErrorMessage: 'postForm.price_invalid',
    },

    files: {
      label: 'postForm.images_rooms_label',
      name: 'images',
      requiredErrorMessage: 'postForm.images_rooms_required',
      invaliErrorMessage: 'postForm.images_invalid',
    },
    surface: {
      label: 'postForm.surface_label',
      name: 'surface',
      requiredErrorMessage: 'postForm.surface_required',
      invaliErrorMessage: 'postForm.surface_invalid',
    },
    videos: {
      label: 'postForm.videos_rooms_label',
      name: 'videos',
      requiredErrorMessage: 'postForm.videos_rooms_required',
      invaliErrorMessage: 'postForm.videos_invalid',
    },
    address: {
      label: 'postForm.address_label',
      name: 'address',
      requiredErrorMessage: 'postForm.address_required',
    },
    nb_roommate: {
      label: 'postForm.number_roommate_label',
      name: 'nb_roommate',
      requiredErrorMessage: 'postForm.number_roommate_required',
    },
    nb_rooms: {
      label: 'postForm.number_rooms_label',
      name: 'nb_rooms',
      requiredErrorMessage: 'postForm.number_rooms_required',
    },
    postal_code: {
      label: 'postForm.code_post_label',
      name: 'postal_code',
      requiredErrorMessage: 'postForm.code_post_required',
      invaliErrorMessage: 'postForm.code_post_invalid',
    },
    state: {
      label: 'postForm.state_label',
      name: 'state',
      requiredErrorMessage: 'postForm.state_required',
      invaliErrorMessage: 'postForm.state_invalid',
    },
    city: {
      label: 'postForm.city_label',
      name: 'city',
      requiredErrorMessage: 'postForm.city_required',
      invaliErrorMessage: 'postForm.city_invalid',
    },
    posterId: {
      name: 'posterId',
    },
  },
  defaultValues: {
    title: '',
    description: '',
    price: 0,

    surface: 0,
    images: [] as File[],
    nb_roommate: 0,
    nb_rooms: 0,
    postal_code: 0,
    city: '',
    state: '',
    posterId: 0,
    likes: 0,

    isLocated: false,
  },
};
