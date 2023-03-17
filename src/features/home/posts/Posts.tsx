import { fakeData } from './fakeData';
import { useTranslation } from 'react-i18next';
import { CustomBoxPosts } from './Posts.styles';
// components
import { BoxPosts } from '../../../components';
import { CardPost } from '../../../components';
import { ButtonWithIcon } from '../../../components';
// mui
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const Posts = () => {
  const { t } = useTranslation();
  return (
    <CustomBoxPosts>
      <BoxPosts>
        {fakeData.map((post) => (
          <CardPost
            title={post.title}
            img={post.img}
            city={post.city}
            price={post.price}
            key={'1'}
          />
        ))}
      </BoxPosts>
      <ButtonWithIcon icon={<KeyboardDoubleArrowRightIcon />} txt={t('home.posts_btn') as string} />
    </CustomBoxPosts>
  );
};
