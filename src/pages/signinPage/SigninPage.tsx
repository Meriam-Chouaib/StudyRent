import { SignIn, SocialMedia } from '../../features';
import { GridStyledCenter } from '../../components/GridStyledCenter.styles';
import { Grid } from '@mui/material';

export function SigninPage() {
  return (
    <>
      <GridStyledCenter>
        <Grid item xs={12} sm={8} md={6} lg={6} width={'60%'}>
          <SignIn />
          <SocialMedia />
        </Grid>
      </GridStyledCenter>
    </>
  );
}
