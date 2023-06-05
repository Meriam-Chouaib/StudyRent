export const formatDate = (date: Date | undefined): string => {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleDateString('en-US');
};
