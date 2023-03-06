import { SignIn, SocialMedia } from '../../features';
import { GridCenter } from '../../components';
import { Grid } from '@mui/material';
import { Paper } from '../../components';

export function SigninPage() {
  return (
    <>
      <SignIn />
      <GridCenter>
        <Grid item xs={12} sm={8} md={6} lg={6} width={'60%'}>
          <Paper>
            <SignIn />
            <SocialMedia />
          </Paper>
        </Grid>
      </GridCenter>
    </>
  );
}
