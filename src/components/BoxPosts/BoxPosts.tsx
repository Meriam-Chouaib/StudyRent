import { BoxPostsProps } from './BoxPosts.type';
import { BoxPostsSyled } from './BoxPosts.style';
import { COLORS } from '../../config/colors';

export const BoxPosts = ({ children, isHomePage }: BoxPostsProps) => {
  return (
    <BoxPostsSyled bgcolor={isHomePage ? COLORS.PRIMARY.MAIN : 'transparent'}>
      {children}
    </BoxPostsSyled>
  );
};
