import { SignIn, SocialMedia } from '../../features';
import { Card } from '@mui/material';
import { GridStyledCenter } from '../../features/auth/signIn/SigninButton/signIn.styles';
import { LoginForm } from '../../features/auth/login';

export function SigninPage() {
  return (
    <>
      <GridStyledCenter>
        <Card sx={{ width: '60%' }}>
          <LoginForm />
          <SocialMedia />
        </Card>
      </GridStyledCenter>
    </>
  );
}
