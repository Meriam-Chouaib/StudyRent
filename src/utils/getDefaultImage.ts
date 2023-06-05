import { STATIC_URL } from '../config/config';

export const getDefaultImagePath = (images?: File[]) => {
  return images?.length ? `${images[0].name}` : '';
};
export const getImageSrc = (name: string) => {
  return `${STATIC_URL}/${name}`;
};
