import { GridStyledCenter } from '../../features/auth/signIn/SigninButton/signIn.styles';
import { LoginForm } from '../../features/auth/login';
import { CardStyled } from '../../components/CardStyled/CardStyled.style';

export function SigninPage() {
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <LoginForm />
          {/* <SocialMedia /> */}
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
