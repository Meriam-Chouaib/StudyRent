import { BoxLeft, ButtonWithIcon, CustomButton } from '../../../components';
import { Posts } from '../../../features';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const ListPostsPage = () => {
  return (
    <>
      <BoxLeft>
        <ButtonWithIcon
          icon={<AddCircleIcon style={{ width: '1.5rem', height: '1.5rem' }} />}
          txt={'add post'}
        />
      </BoxLeft>

      <Posts
        page={3}
        rowsPerPage={9}
        color={'transparent'}
        padding="0"
        margin="2rem 0"
        withButton={false}
      />
    </>
  );
};
