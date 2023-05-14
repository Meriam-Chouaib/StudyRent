export const PATHS = {
  ROOT: '/',

  ABOUT: 'about',
  CONTACT: 'contact',
  POSTS: 'posts',
  ALL: '*',
  AUTH: {
    ROOT: 'auth',
    SINGNIN: 'signin',
    SIGNUP: 'signup',
    LOGOUT: 'logout',
  },
  DASHBOARD: {
    ROOT: 'dashboard',
    STUDENT: {
      LIST: 'students',
      ADD: 'students/create',
    },
    POST: {
      LIST: 'posts',
      ADD: 'posts/create',
      EDIT: 'posts/:id',
      POSTS_BY_OWNER: 'postsByOwner',
      FILES: '/files',
      FAVORIS: 'posts/favoris/',
    },
    FAVORIS: 'favoris',
    CHAT: 'chat',
    PROFILE: 'profile',
  },
  MAIN: {
    HOME: '',
    ERROR: {
      P_500: '500',
      P_404: '404',
    },
  },
  SOCIAL_MEDIA: {
    FB: 'https://www.facebook.com/',
    INSTAGRAM: 'https://www.instagram.com/',
    GOOGLE: 'https://www.google.fr/',
    TWITTER: 'https://twitter.com/',
  },
};
