import { useTranslation } from 'react-i18next';
import { BoxCenter } from '../../../components';
import { AddPost } from '../../../features';
import { BoxStyled, CustomTypography } from './AddPostPage.style';
interface AddPostPageProps {
  title: string;
  isEdit?: boolean;
}
export const AddPostPage = ({ title, isEdit }: AddPostPageProps) => {
  const { t } = useTranslation();
  return (
    <BoxCenter>
      <BoxStyled>
        <CustomTypography variant="h1">{title}</CustomTypography>
        {!isEdit && <AddPost btn_txt={t('postForm.add_post')} />}
        {isEdit && <AddPost btn_txt={t('postForm.edit_post')} isEdit={true} />}
      </BoxStyled>
    </BoxCenter>
  );
};
