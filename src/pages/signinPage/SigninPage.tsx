// features
import { GridStyledCenter } from '../../features';
import { LoginForm } from '../../features';
// components
import { CardStyled } from '../../components';

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
