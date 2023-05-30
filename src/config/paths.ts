export const PATHS = {
  ROOT: '/',

  ABOUT: 'about',
  CONTACT: 'contact',
  USERS: 'users',
  POSTS: 'posts',
  NEAREST_POSTS: '/near/:id',
  ALL: '*',
  AUTH: {
    ROOT: 'auth',
    SINGNIN: 'signin',
    SIGNUP: 'signup',
    LOGOUT: 'logout',
  },
  FILTER: {
    MAXPRICE: '/maxPrice',
    MINPRICE: '/minPrice',
    MAXSURFACE: '/maxSurface',
    MINSURFACE: '/minSurface',
  },
  DASHBOARD: {
    ROOT: 'dashboard',
    ADMIN: {
      ROOT: 'admin',
      STUDENTS: 'students',
      OWNERS: 'owners',
      POSTS: 'posts',
      EDIT_USER: 'students/:id',
    },
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
    USERS: 'users',
  },
  MAIN: {
    HOME: '',
    MAP: 'map',

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
