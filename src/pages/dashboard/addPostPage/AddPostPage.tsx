import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import { AddPost } from '../../../features';
import { BoxStyled, CustomTypography } from './AddPostPage.style';

export const AddPostPage = () => {
  const { t } = useTranslation();
  return (
    <BoxCenter>
      <BoxStyled>
        <CustomTypography variant="h1">{t('postForm.title')}</CustomTypography>
        <AddPost isEdit={false} />
      </BoxStyled>
    </BoxCenter>
  );
};
