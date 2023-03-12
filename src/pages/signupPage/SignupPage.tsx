import { GridStyledCenter } from '../../features/auth/signIn/SigninButton/signIn.styles';
import { CardStyled } from '../../components/CardStyled/CardStyled.style';
import { SignupForm } from '../../features/auth/signUp';

export function SignupPage() {
  return (
    <>
      <GridStyledCenter>
        <CardStyled>
          <SignupForm />
        </CardStyled>
      </GridStyledCenter>
    </>
  );
}
