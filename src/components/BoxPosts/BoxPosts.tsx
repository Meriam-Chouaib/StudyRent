import { BoxPostsProps } from './BoxPosts.type';
import { BoxPostsSyled } from './BoxPosts.style';

export const BoxPosts = ({ children }: BoxPostsProps) => {
  return <BoxPostsSyled>{children}</BoxPostsSyled>;
};
