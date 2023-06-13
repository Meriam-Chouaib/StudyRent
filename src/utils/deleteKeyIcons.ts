import { IconsProps } from '../layouts/dashboard/sidebar/useGetIcons';

interface deleteKeyProps {
  icons: IconsProps[];
  keysToDelete: string[];
}
export const deleteKeys = ({ icons, keysToDelete }: deleteKeyProps): IconsProps[] => {
  keysToDelete.map((icon) => {
    const index = icons.findIndex((item) => item.txt === icon);
    if (index !== -1) {
      icons.splice(index, 1);
    }
  });

  return icons;
};
