export const getDefaultImagePath = (images?: File[]) => {
  return images?.length ? `${images[0].name}` : '';
};
