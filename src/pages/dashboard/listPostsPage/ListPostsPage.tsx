import { Typography } from '@material-ui/core';
import { Posts } from '../../../features';

export const ListPostsPage = () => {
  return (
    <>
      <Typography variant="h1">List posts page</Typography>
      <Posts page={3} rowsPerPage={9} />
    </>
  );
};
