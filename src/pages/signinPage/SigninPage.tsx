import { SignIn, SocialMedia } from '../../features';
import { Card } from '@mui/material';
import { GridStyledCenter } from '../../features/auth/signIn/SigninButton/signIn.styles';

export function SigninPage() {
  return (
    <>
      <GridStyledCenter>
        <Card sx={{ width: '60%' }}>
          <SignIn />
          <SocialMedia />
        </Card>
      </GridStyledCenter>
    </>
  );
}
