import { Typography } from '@mui/material';
import { AddPost } from '../../../features';
import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import { BoxStyled } from './AddPostPage.style';

export const AddPostPage = () => {
  const { t } = useTranslation();
  return (
    <BoxCenter>
      <BoxStyled>
        <Typography variant="h1">{t('postForm.title')}</Typography>
        <AddPost isEdit={false} />
      </BoxStyled>
    </BoxCenter>
  );
};
