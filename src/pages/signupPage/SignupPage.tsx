// features
import { GridStyledCenter } from '../../features';
import { SignupForm } from '../../features';
// comments
import { CardStyled } from '../../components';
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
