import { Link } from 'react-router-dom';
import SignUpForm from '../../../features/auth/signUp/SignUpForm';
import { ButtonWithIcon } from '../../../components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getPath } from '../../../utils/getPath';
import { useTranslation } from 'react-i18next';

interface AddUserPageProps {
  backStudentList?: boolean;
  backOwnersList?: boolean;
}

export const AddUserPage = ({ backOwnersList, backStudentList }: AddUserPageProps) => {
  const { t } = useTranslation();

  return (
    <>
      <SignUpForm
        isAdmin={true}
        backStudentList={backStudentList}
        backOwnersList={backOwnersList}
      />
      <Link to={getPath(backStudentList, backOwnersList)} style={{ textDecoration: 'none' }}>
        <ButtonWithIcon
          margBottom="3rem"
          icon={<ArrowBackIcon />}
          txt={t('dashboardListPosts.back_list') as string}
        />
      </Link>
    </>
  );
};
